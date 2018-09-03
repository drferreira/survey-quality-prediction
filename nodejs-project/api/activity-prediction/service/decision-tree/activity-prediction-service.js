'use strict';

var DecisionTree = require('decision-tree');
var ActivityPredictionDataBuilder = require('./activity-prediction-data-build');
var ActivityPredictionDao = require('../../dao/activity-prediction-dao');
var PredictedActivityDao = require('../../dao/predicted-activity-dao');
var DecisionTreeModel = require('../../model/decision-tree-model');
var Activity = require('../../model/activity');

class ActivityPredictionService{
    trainingActivity(databaseForTraining, activityJson) {
        var activity = Activity.deserialize(activityJson);
        var customIds = activity.getCustomIds();
        customIds.forEach((customId) => {
            var features = activity.getFeatures(customId);
            this.trainingVariable(databaseForTraining, customId, features);
        });
    };

    /**
     * This function is responsible for training a particular variable based on a reference set.
     * @param databaseForTraining Set of data that will be used as a reference for the construction of relationship rules.
     * @param variableForPrediction Variable for prediction
     * @param features Variables that will be applied to the model for reference during prediction.
     */
    trainingVariable(databaseForTraining, variableForPrediction, features) {
        var activityPredictionDao = new ActivityPredictionDao();
        var activityPredictionDataBuilder = new ActivityPredictionDataBuilder();
        var database = activityPredictionDataBuilder.buildActivityDatabase(databaseForTraining);

        var decisionTreeModel = new DecisionTreeModel(variableForPrediction, features);
        var training = new DecisionTree(database, decisionTreeModel.target, decisionTreeModel.features);
        decisionTreeModel.setTrainingResult(training);

        activityPredictionDao.persist(decisionTreeModel);
    };

    predictVariable (decisionTree, activityForPrediction, variableForPrediction) {
        var activityPredictionDataBuilder = new ActivityPredictionDataBuilder();
        var predictionModel = activityPredictionDataBuilder.buildActivity(activityForPrediction);
        delete predictionModel[variableForPrediction];
        return new DecisionTree(decisionTree.data, decisionTree.target, decisionTree.features).predict(predictionModel);
    };

    predictActivity(activity) {
        new Promise((resolve) => {
            activity.questions.map(async (question) => {
                var target = question.getCustomId();
                var decisionTree = await this.getDecisionTree(target);
                var decisionTree = decisionTree.getTraining();
                var predicted = this.predictVariable(decisionTree, activity, target);
                activity.addPrediction(target, predicted);
                resolve(activity);
            });
        }).then(function (activity) {
            var predictedActivityDao = new PredictedActivityDao(activity.acronym);
            predictedActivityDao.persist(activity);
        });
    };

    getDecisionTree(target) {
        var activityPredictionDao = new ActivityPredictionDao();
        return activityPredictionDao.getDecisionTree(target);
    };
}
module.exports = ActivityPredictionService;



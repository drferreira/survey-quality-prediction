'use strict';

var DecisionTree = require('decision-tree');
var activityPredictionDataBuild = require('./activity-prediction-data-build');

exports.training = function (databaseForTraining, variableForPrediction, features) {
    var database = activityPredictionDataBuild.buildActivityDatabase(databaseForTraining);
    return new DecisionTree(database, variableForPrediction, features)
};

exports.predictVariable = function (decisionTree, activityForPrediction, variableForPrediction) {
    var predictionModel = activityPredictionDataBuild.buildActivity(activityForPrediction);
    delete predictionModel[variableForPrediction];
    return decisionTree.predicted(predictionModel);
};

exports.predictAllVariables = function(activity) {
    var predictedActivity = [];
    activity.questions.forEach(function (question) {
        var variableForPrediction = question.id;
        var decisionTree = this.getDecisionTree(variableForPrediction);
        var predicted = this.predictVariable(decisionTree, activity, variableForPrediction);
        predictedActivity.push((question['predicted'] = predicted));
    })
};

exports.getDecisionTree = function (variable) {
    return [] // TODO return prediction database for all acronyns
};

exports.getPredictionModel = function (activity) {
    return activityPredictionDataBuild.buildActivity(activity);
};

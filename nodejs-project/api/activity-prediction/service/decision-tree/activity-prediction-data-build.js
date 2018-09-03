'use strict';

var Activity = require('../../model/activity');

class ActivityPredictionDataBuilder{
    buildActivity(activity) {
        var predictionModel = {};
        activity.questions.forEach(function (question) {
            var customId = question.customId;
            predictionModel[customId] = question.answer.value;
        });
        return predictionModel;
    };

    buildActivityDatabase(activityDatabase) {
        var predictionDatabaseModel = [];
        activityDatabase.forEach((activity) => {
            var activity = Activity.deserialize(activity);
            predictionDatabaseModel.push(activity.getPredictionDatabase());
        });
        return predictionDatabaseModel;
    };
}
module.exports = ActivityPredictionDataBuilder;
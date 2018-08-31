'use strict';

exports.buildActivity = function (activity) {
    var predictionModel = {};
    activity.questions.forEach(function (question) {
        var customId = question.id;
        predictionModel[customId] = question.answer.value;
    });
    return predictionModel;
};

exports.buildActivityDatabase = function (activityDatabase) {
    var predictionDatabaseModel = [];
    activityDatabase.forEach((activity) => {
        var activityPredictionModel = this.buildActivity(activity);
        predictionDatabaseModel.push(activityPredictionModel);
    });
    return predictionDatabaseModel;
};
'use strict';
const RESPONSE_MESSAGE_TRAINING = "Training Ready";

var ActivityPredictionService = require('../service/decision-tree/activity-prediction-service');
var Activity = require('../model/activity');

    exports.predict = function(req, res) {
        var activity = Activity.deserialize(req.body);
        var activityPredictionService = new ActivityPredictionService();
        activityPredictionService.predictActivity(activity);
        res.json("{}")
    };

    // exports.getPredictionModel = function(req, res) {
    //     var activityPredictionService = new ActivityPredictionService();
    //     res.json(activityPredictionService.getDecisionTree(req.body));
    // };

    exports.trainig = function(req, res) {
        var trainingBody = req.body;
        var database = trainingBody.database;
        var activity = Activity.deserialize(trainingBody.activity);

        var activityPredictionService = new ActivityPredictionService();
        activityPredictionService.trainingActivity(database, activity);
        res.status(200).send(RESPONSE_MESSAGE_TRAINING);
    };

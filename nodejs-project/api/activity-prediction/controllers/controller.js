'use strict';
var activityPredictionService = require('../service/decision-tree/activity-prediction-service');

exports.predict = function(req, res) {
    var activity = req.body;
    activityPredictionService.predictAllVariables(activity);
};

exports.getPrediction = function(req, res) {
    res.json("{return:get}");
};

exports.getPredictionModel = function (req, res) {
    res.json(activityPredictionService.getPredictionModel(req.body));
};

exports.trainig = function (req, res) {
    var training = req.body;
    var database = training.database;
    var variableForPrediction = training.variableForPrediction;
    var fetures = training.features;
    res.json(activityPredictionService.training(database, variableForPrediction, fetures))
};

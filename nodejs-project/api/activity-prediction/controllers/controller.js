'use strict';
var DecisionTree = require('decision-tree');
exports.predict = function(req, res) {
    res.json(req.body);
};

exports.getPrediction = function(req, res) {
    res.json("{return:get}");
};

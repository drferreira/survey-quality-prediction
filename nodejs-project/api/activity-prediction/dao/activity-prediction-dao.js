'use strict';

var GenericDao = require("../../database/generic-dao");
var DecisionTreeModel = require("../model/decision-tree-model");

const TRAINING_COLLECTION_NAME = "activity_decision_tree";

class ActivityPredictionDao extends GenericDao{
    constructor(){
        super(TRAINING_COLLECTION_NAME);
    }

    persist(training){
        super.insertOne(training);
    }

    getDecisionTree(target){
        return new Promise((resolve, reject) => {
            let query = {"target":target.toString()};

            super.findOne(query).then((result) => {
                var decisionTree = DecisionTreeModel.deserialize(result);
                resolve(decisionTree);
            });
        })
    }
}

module.exports = ActivityPredictionDao;

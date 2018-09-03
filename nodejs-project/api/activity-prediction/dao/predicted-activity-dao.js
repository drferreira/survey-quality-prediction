'use strict';

var GenericDao = require("../../database/generic-dao");

class PredictedActivityDao extends GenericDao{

    constructor(acronym){
        var collectionName = "predicted_activity_"+acronym;
        super(collectionName);
        this.collectionName = collectionName;
    }

    persist(activity){
        super.insertOne(activity);
    }
}

module.exports = PredictedActivityDao;
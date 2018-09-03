'use strict';

var Question = require('./question');

class Activity{

    static deserialize(json){
        var activity = new Activity();
        activity.activityId = json.activityId;
        activity.acronym = json.acronym;

        activity.questions = [];
        json.questions.map((question => {activity.questions.push(Question.deserialize(question))}));

        return activity;
    };

    getPredictionDatabase(){
        var predictionModel = {};
        this.questions.forEach(function (question) {
            var customId = question.customId;
            predictionModel[customId] = question.answer.value;
        });
        return predictionModel;
    }

    addPrediction(customId, value){
        this.questions.forEach((question) => {
            if(question.isCustomId(customId)){
                question.addPrediction(value);
            }
        })
    }


    getCustomIds(){
        var customIds = [];
        this.questions.forEach((question) => {
            customIds.push(question.getCustomId());
        });
        return customIds;
    }

    getFeatures(predictionVariable){
        var features = [];
        this.questions.forEach((question) => {
            if(!question.isCustomId(predictionVariable)){
                features.push(question.customId);
            }
        });
        return features;
    }
};

module.exports = Activity;
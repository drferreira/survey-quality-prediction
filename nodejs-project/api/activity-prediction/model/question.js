'use strict';
var Metadata = require('./metadata.js');
var Answer = require('./answer.js');

class Question{
    static deserialize(json){
        var question = new Question();
        question.customId = json.customId;
        question.type = json.type;
        question.answer = Answer.deserialize(json.answer);
        question.metadata = Metadata.deserialize(json.metadata);
        return question;
    };

    addPrediction(value){
        this.answer.addPrediction(value);
    };

    isCustomId(customId){
       return this.customId === customId;
    };

    getCustomId(){
        return this.customId;
    };
};

module.exports = Question;
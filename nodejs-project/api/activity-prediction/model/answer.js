'use strict';

class Answer{
    static deserialize(json){
        var answer = new Answer();
        answer.value = json.value;

        return answer;
    }

    addPrediction(value){
        this.prediction = value;
    }
};

module.exports = Answer;
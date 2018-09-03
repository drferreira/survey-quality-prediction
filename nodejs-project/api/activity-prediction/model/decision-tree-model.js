'use strict';

class DecisionTreeModel{
    constructor(target, features){
        this.features = features;
        this.target = target;
    };

    setTrainingResult(training){
        this.training = training;
    };

    static deserialize(json){
        var decisionTree = new DecisionTreeModel();
        decisionTree.features = json.features;
        decisionTree.target = json.target;
        decisionTree.training = json.training;
        return decisionTree;
    };

    getTraining(){
        return this.training;
    };

    getFeatures(){

    }

}

module.exports = DecisionTreeModel;
const DATABASE_NAME = "otus-prediction-qc";

var connectionData = require('../../resources/database.json');
var MongoClient = require('mongodb').MongoClient;

class GenericDao{
    constructor(collectionName){
        this.collectionName = collectionName;
    }

    buildConnectionAddress(){
        return connectionData.connection.protocol + "://"
            + connectionData.connection.user
            + ":"
            + connectionData.connection.password
            + "@"
            + connectionData.connection.url
            + ":"
            + connectionData.connection.port
            + "/"
            + connectionData.connection.databaseAuthentication
    }

    initConnection(){
        return new Promise((resolve, reject) => {
            var url = this.buildConnectionAddress();
            MongoClient.connect(url, (error, db) => {
                var database = db.db(DATABASE_NAME);
                resolve(database);
            });
        })
    }

    insertOne(data){
        let collection = this.collectionName;
        return new Promise((resolve, reject) => {
            this.initConnection().then((database) => {
                database.collection(collection).insertOne(data).then((result) => {
                   resolve(result);
                });
            });
        });
    };

    findOne(query){
        let collection = this.collectionName;
        return new Promise((resolve, reject) => {
            this.initConnection().then((database) => {
                database.collection(collection).findOne(query, function(error, result) {
                    resolve(result);
                })
            });
        });
    };
}

module.exports = GenericDao;
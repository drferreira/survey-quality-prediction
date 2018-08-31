'use strict';
module.exports = function(app) {
var controller = require('../controllers/controller');
app.route('/activity-prediction')
   .get(controller.getPrediction)
   .post(controller.predict);

app.route('/activity-prediction/data')
   .post(controller.getPredictionModel);

app.route('/activity-prediction/training')
    .post(controller.trainig);
};

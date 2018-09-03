'use strict';
module.exports = function(app) {
var ActivityPredictionController = require('../controllers/controller');
app.route('/activity-prediction')
   .post(ActivityPredictionController.predict);

app.route('/activity-prediction/training')
    .post(ActivityPredictionController.trainig);
};

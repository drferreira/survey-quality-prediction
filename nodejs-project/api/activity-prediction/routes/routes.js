'use strict';
module.exports = function(app) {
var controller = require('../controllers/controller');
app.route('/activity-prediction')
   .get(controller.getPrediction)
   .post(controller.predict);
};

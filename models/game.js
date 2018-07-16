var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema({
  id: String,
  teamOneGoals: Number,
  teamTwoGoals: Number,
  teamOneName: String,
  teamTwoName: String
});

module.exports = mongoose.model('Game', gameSchema);


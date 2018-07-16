const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/comentarista');

const Game = mongoose.model('games', { id: String, teamOneGoals: Number, teamTwoGoals: Number, teamOneName: String, teamTwoName: String });

var example = {id: 'M1K23', teamOneGoals: 0, teamTwoGoals: 2, teamOneName: 'Bahia', teamTwoName: 'Vitoria'};

var newGame = new Game(example);

newGame.save().then(() => {
  newGame.remove().then(() => {
    console.log('ola');
  });
});

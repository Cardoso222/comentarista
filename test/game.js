var request = require('request');
var assert = require('assert');
var Game = require('../models/game');

const URL = 'http://localhost:3000';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comentarista', {useNewUrlParser: true});

describe('Insert new game', function() {
    var response = {};
    before(function(done) {
      let PATH = '/new-game';
      var example = {id: 'M1K23', teamOneGoals: 0, teamTwoGoals: 2, teamOneName: 'Bahia', teamTwoName: 'Vitoria'};

      request.post({
        url: URL + PATH,
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(example)
      },
      function(err, res) {
        if (err) return done(err);
        response.status = res.statusCode;

        done();
      })
    })

    it('should register a new game', function() {
      assert.equal(200, response.status);
    })

    after(function(done) {
      Game.remove({id: 'M1K23'}).then(function() {
        done();
      });
    });
})

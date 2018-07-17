var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
var Game = require('./models/game');

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comentarista', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));
app.engine('html', nunjucks.render);

app.get('/', function(req, res) {
  res.render('index.html', {message: "Hello World" } );
});

app.post('/new-game', async function(req, res) {
    if (req.body.id !== undefined) {
      var newGame = new Game(req.body);
      await newGame.save();

      return res.status(200).json({ success: true});
    }

    return res.status(500).json({ error: 'Invalid params' });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


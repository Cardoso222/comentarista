var express = require('express');
var app = express();
var nunjucks = require('nunjucks');

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
});
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));
app.engine('html', nunjucks.render);

app.get('/', function(req, res) {
  res.render('index.html', {message: "Hello World" } );
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


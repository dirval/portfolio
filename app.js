var express = require('express');
var app = express();


app.use(express.static('public'));

//Port use for show the website in local with URL: localhost:4000
var PORT_NUMBER = 4000;
app.listen(PORT_NUMBER, function(){
  console.log("App running in a port: " + PORT_NUMBER);
});

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// main page
app.get('/', function (req,res){
  res.render('pages/index');
});

app.get('/labs', function(req, res) {
    res.render('pages/labs');
});

app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

app.get('/lab1', function (req, res) {
    res.render('pages/alllabs/lab1');
})

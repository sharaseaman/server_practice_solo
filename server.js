var express = require('express');
var path = require('path');
var app = express();

//var classmates = [];

app.use(express.static('public'));

//base url
app.get('/', function(req,res){
    console.log('someone clicked localhost 3000');
    res.sendFile( path.resolve( 'views/index.html' ) );
});

app.listen(3000, function(){
    console.log('listening on port 3000');
});
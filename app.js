var geeseArray = [
    {
        name: 'Fred',
        age: 5,
        type: 'Betelgeusian Goosian'
    },
    {
        name: 'Carla',
        age: 4,
        type: 'Canadian'
    }
];

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 5000;

app.use(express.static('public')); // middleware

app.use(bodyParser.urlencoded({extended: true})); //middleware

app.get('/geese', function(req, res) {   
    if (age = NaN) {
        
    }
    res.send(geeseArray) // this becomes response from the client.js
})
app.post('/geese', function(req, res){
    console.log(req.body)
    if (req.body.name === "" ){
        console.log('test')
        res.sendStatus(400);
    }
    else {
    gooseArray.push(req.body);
    // 201 = succesfully created
    res.sendStatus(201);
    }
    
})  

app.listen(port, function() {
    console.log('Listening to port', port);
    
})
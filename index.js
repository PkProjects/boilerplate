const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Game = require('./models/game');

mongoose.connect('mongodb://localhost:27017/game', {useNewUrlParser: true, useUnifiedTopology: true})
.then( () =>{
    console.log("Connected");
})
.catch(err => {
    console.log("Error: " + err);
});


app.use(express.static(__dirname + '/public'));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/popper', express.static(__dirname + '/node_modules/popper.js/dist/'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/cats', (req, res) => {
    res.render('home.ejs', {name: "boo", age: 11 });
});

app.get('/game/:id', async (req, res) => {
    const { id } = req.params;
    let gameTitle = id;
    const gameData = await Game.findOne({title: gameTitle })
    .then(data => {
        if(data){
            console.log(data);
            res.render('gamedetails.ejs', { data });
        } else {
            console.log("Empty data, redirecting home!");
            res.render('home.ejs', {name: "boo", age: 11 });
        }
    })
    .catch(err => {
        console.log("This went wrong: " + err);
    });
});

app.listen(8080, () => {

});

const mongoose = require('mongoose');

const Game = require('./models/game');

mongoose.connect('mongodb://localhost:27017/game', {useNewUrlParser: true, useUnifiedTopology: true})
.then( () =>{
    console.log("Connected");
})
.catch(err => {
    console.log("Error: " + err);
});

Game.insertMany([
    {title: 'Fortnite', year:2016, score: 3.0, rating: "PG-13"},
    {title: 'WoW', year:2002, score: 7.6, rating: "R"},
    {title: 'Divinity', year:2008, score: 8.2, rating: "PG"},
    {title: 'Civilisation', year:2012, score: 6.5, rating: "PG"},
    {title: 'Farmville', year:2010, score: 9.9, rating: "R"},
])
.then( data => {
    console.log("Succes!: " + data);
})
.catch(err => {
    console.log("Nope! : " + err);
})
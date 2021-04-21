
const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String,
    image: String
});


const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
var userInput = process.argv[2];
var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([{
        type: "list",
        name: "LIRIlist",
        message: "Welcome to LIRI! Please choose your path",
        choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"]
    }

]).then(function(guess) {
    userInput = guess.LIRIlist;

    if (userInput === 'my-tweets') {
        var twitter = require('./twitter.js');
    } else if (userInput === 'spotify-this-song') {
        var spotify = require('./spotify.js');
    } else if (userInput === 'movie-this') {
        var omdb = require('./omdb.js');
    } else if (userInput === 'do-what-it-says') {
        fs.readFile("random.txt", "utf8", function(error, data) {
            var randomFileArray = data.split(',');
            var command = randomFileArray[0];
            var searchTerm = randomFileArray[1];
        });
    }
});

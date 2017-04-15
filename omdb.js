var request = require('request');
var fs = require("fs");
var inquirer = require("inquirer");
var fileSearchTerm = require('./liri.js');
var movieName;
fileSearchTerm = fileSearchTerm.searchTerm;

function omdbSearch(movie) {
    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json";

    request(queryUrl, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(introMessage);
            console.log(`_____________\n`);
            console.log("Movie Title: " + JSON.parse(body).Title);
            console.log("Release Year: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Production Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
            console.log(`_____________\n`);
            fs.appendFile("log.txt", "\n\nmovie-this " + movie + "\n\nMovie Title: " + JSON.parse(body).Title + "\nRelease Year: " + JSON.parse(body).Year + "\nIMDB Rating: " + JSON.parse(body).imdbRating + "\nProduction Country: " + JSON.parse(body).Country + "\nLanguage: " + JSON.parse(body).Language + "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors, function(err) {
                if (err) {
                    console.log(err);
                }
            });
        }
    });
}
if (fileSearchTerm === undefined) {
    inquirer.prompt([{
            name: "movieChoice",
            message: "Movie this! Please Enter A Movie Title:"
        }

    ]).then(function(guess) {

        userInput = guess.movieChoice;
        if (userInput != '') {
            movieName = userInput;
            introMessage = 'Movie This!';
        } else {
            movieName = 'Mr.Nobody';
            introMessage = 'If you haven\'t watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/\nIt\'s on Netflix!';
        }

        omdbSearch(movieName);

    });
} else {
	introMessage = 'do-what-it-says';
    omdbSearch(fileSearchTerm);
}

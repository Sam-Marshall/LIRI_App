var userInput = process.argv[2];
var fs = require("fs");

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
        console.log(command);
        console.log(searchTerm);
        // var spotify = require('./spotify.js');
    });
}

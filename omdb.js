// node liri.js movie-this '<movie name here>'

var request = require('request');

var userInput = process.argv.slice(2).join('+');

if (userInput != '') {
    movieName = userInput;
    introMessage = 'Movie This!';
} else {
    movieName = 'Mr.+Nobody';
    introMessage = 'If you haven\'t watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/\nIt\'s on Netflix!';
}

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";

request(queryUrl, function(error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log('\n');
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
    }
});

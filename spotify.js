var spotify = require('spotify');
var searchTerm;
var introMessage;
var fs = require("fs");
var inquirer = require("inquirer");

inquirer.prompt([{
        name: "songChoice",
        message: "Spotify this Song! Please Enter A Song Title:"
    }

]).then(function(guess) {
    userInput = guess.songChoice;
    if (userInput != '') {
        searchTerm = userInput;
        introMessage = 'Spotify This Song!';
    } else {
        searchTerm = 'Baby Got Back';
        introMessage = 'No Song Detected! Enjoy Sir Mix-A-Lot\'s Classic Tune';
    }

    spotify.search({ type: 'track', query: searchTerm }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return
        }
        console.log('\n');
        console.log(introMessage);
        console.log(`_____________\n`);

        console.log('Song Name: ' + JSON.stringify(data.tracks.items[0].name, null, 2));
        console.log('Album Name: ' + JSON.stringify(data.tracks.items[0].album.name, null, 2));
        console.log('Artist Name: ' + JSON.stringify(data.tracks.items[0].artists[0].name, null, 2));
        console.log('Preview URL: ' + JSON.stringify(data.tracks.items[0].preview_url, null, 2));
        console.log(`_____________\n`);

        fs.appendFile("log.txt", '\n\nspotify-this-song' + '\n\nSong Name: ' + JSON.stringify(data.tracks.items[0].name) + '\nAlbum Name: ' + JSON.stringify(data.tracks.items[0].album.name) + '\nArtist Name: ' + JSON.stringify(data.tracks.items[0].artists[0].name) + '\nPreview URL: ' + JSON.stringify(data.tracks.items[0].preview_url), function(err) {
            if (err) {
                console.log(err);
            }
        });
    });
});

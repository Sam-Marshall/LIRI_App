// node liri.js spotify-this-song '<song name here>'
// if no song is provided then your program will default to
// "The Sign" by Ace of Base

var spotify = require('spotify');

spotify.search({ type: 'track', query: 'toxic' }, function(err, data) {
    if (err) {
        console.log('Error occurred: ' + err);
        return
    }
    console.log('Album Name: ' + JSON.stringify(data.tracks.items[0].album.name, null, 2));
    console.log('Artist Name: ' + JSON.stringify(data.tracks.items[0].artists[0].name, null, 2));
    console.log('Song Name: ' + JSON.stringify(data.tracks.items[0].name, null, 2));
    console.log('Preview URL: ' + JSON.stringify(data.tracks.items[0].preview_url, null, 2));
});

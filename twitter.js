var Twitter = require('twitter');
var twitterKeys = require('./keys.js');

var client = new Twitter(twitterKeys.twitterKeys);

client.get('statuses/user_timeline', function(error, tweets, response) {
    if (error) {
        throw error;
    }
    console.log('Most Recent 20 Tweets');
    console.log(`_____________`);
    for (var i = 0; i < 20; i++) {
        console.log(`Tweet ${i + 1}`);
        console.log(JSON.stringify(tweets[i].text, null, 2));
        console.log(JSON.stringify(tweets[i].created_at, null, 2));
        console.log(`_____________`);
    }
});

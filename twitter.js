var Twitter = require('twitter');
var twitterKeys = require('./keys.js');
var fs = require("fs");
var inquirer = require("inquirer");

var client = new Twitter(twitterKeys.twitterKeys);

client.get('statuses/user_timeline', function(error, tweets, response) {
    if (error) {
        throw error;
    }
    console.log('\nMy Most Recent 20 Tweets!');
    console.log(`_____________`);
    fs.appendFile("log.txt", '\n\nmy-tweets', function(err) {
        if (err) {
            console.log(err);
        }
    });
    for (var i = 0; i < 20; i++) {
        console.log(`Tweet ${i + 1}`);
        console.log(JSON.stringify(tweets[i].text, null, 2));
        console.log(JSON.stringify(tweets[i].created_at, null, 2));
        console.log(`_____________`);
        fs.appendFile("log.txt", `\n\nTweet ${i + 1}` + '\n' + JSON.stringify(tweets[i].text) + JSON.stringify(tweets[i].created_at), function(err) {
            if (err) {
                console.log(err);
            }
        });
    }
});

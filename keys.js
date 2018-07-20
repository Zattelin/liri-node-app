console.log('this is loaded');

require("dotenv").config();

// Twitter API keys
var twitterCon = process.env.TWITTER_CONSUMER_KEY;
var twitterSec = process.env.TWITTER_CONSUMER_SECRET;
var twitterTok = process.env.TWITTER_ACCESS_TOKEN_KEY;
var twitterTokSec = process.env.TWITTER_ACCESS_TOKEN_SECRET;

exports.twitter = {
  consumer_key: twitterCon,
  consumer_secret: twitterSec,
  access_token_key: twitterTok,
  access_token_secret: twitterTokSec,
};

// Spotify API keys
var spotifyID = process.env.SPOTIFY_ID;
var spotifySec = process.env.SPOTIFY_SECRET;

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET,
};


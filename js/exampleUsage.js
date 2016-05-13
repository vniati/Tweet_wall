/**
 * ### HOW TO CREATE A VALID ID TO USE: ###
 * Go to www.twitter.com and sign in as normal, go to your settings page.
 * Go to "Widgets" on the left hand side.
 * Create a new widget for what you need eg "user time line" or "search" etc.
 * Feel free to check "exclude replies" if you don't want replies in results.
 * Now go back to settings page, and then go back to widgets page and
 * you should see the widget you just created. Click edit.
 * Look at the URL in your web browser, you will see a long number like this:
 * 345735908357048478
 * Use this as your ID below instead!
 */

/**
 * How to use TwitterFetcher's fetch function:
 *
 * @function fetch(object) Fetches the Twitter content according to
 *     the parameters specified in object.
 *
 * @param object {Object} An object containing case sensitive key-value pairs
 *     of properties below.
 *
 * You may specify at minimum the following two required properties:
 *
 * @param object.id {string} The ID of the Twitter widget you wish
 *     to grab data from (see above for how to generate this number).
 * @param object.domId {string} The ID of the DOM element you want
 *     to write results to.
 *
 * You may also specify one or more of the following optional properties
 *     if you desire:
 *
 * @param object.maxTweets [int] The maximum number of tweets you want
 *     to return. Must be a number between 1 and 20. Default value is 20.
 * @param object.enableLinks [boolean] Set false if you don't want
 *     urls and hashtags to be hyperlinked.
 * @param object.showUser [boolean] Set false if you don't want user
 *     photo / name for tweet to show.
 * @param object.showTime [boolean] Set false if you don't want time of tweet
 *     to show.
 * @param object.dateFunction [function] A function you can specify
 *     to format date/time of tweet however you like. This function takes
 *     a JavaScript date as a parameter and returns a String representation
 *     of that date.
 * @param object.showRetweet [boolean] Set false if you don't want retweets
 *     to show.
 * @param object.customCallback [function] A function you can specify
 *     to call when data are ready. It also passes data to this function
 *     to manipulate them yourself before outputting. If you specify
 *     this parameter you must output data yourself!
 * @param object.showInteraction [boolean] Set false if you don't want links
 *     for reply, retweet and favourite to show.
 * @param object.showImages [boolean] Set true if you want images from tweet
 *     to show.
 * @param object.linksInNewWindow [boolean] Set false if you don't want links
 *     to open in new window.
 * @param object.lang [string] The abbreviation of the language you want to use
 *     for Twitter phrases like "posted on" or "time ago". Default value
 *     is "en" (English).
 * @param object.showPermalinks [boolean] Set false if you don't want time
 *     to be permalinked.
 * @param object.dataOnly [boolean] Set true if you want the argument passed
 *     to the customCallback to be an Array of Objects containing data
 *     instead of an Array of HTML Strings
 */

// ##### Simple example 1 #####
// A simple example to get my latest tweet and write to a HTML element with
// id "example1". Also automatically hyperlinks URLS and user mentions and
// hashtags.


var config1 = {
  "id": '723057880971104256',
  "domId": 'example1',
  "maxTweets": 0,
  "enableLinks": true
};
twitterFetcher.fetch(config1);


// ##### Simple example 2 #####
// A simple example to get my latest 5 of my favourite tweets and write to a
// HTML element with id "talk". Also automatically hyperlinks URLS and user
// mentions and hashtags but does not display time of post. We also make the
// request to Twitter specifiying we would like results where possible in
// English language.
var config2 = {
  "id": '723057880971104256',
  "domId": 'example2',
  "maxTweets": 0,
  "enableLinks": true,
  "showUser": true,
  "showTime": true,
  "lang": 'en'
};
twitterFetcher.fetch(config2);


// ##### Simple example 3 #####
// A simple example to get latest 5 tweets for #API tag and shows any images
// attached to tweets.
var config3 = {
  "id": '723057880971104256',
  "domId": 'example3',
  "maxTweets": 30,
  "enableLinks": true,
  "showImages": true
};
twitterFetcher.fetch(config3);

function populateTpl(tweets){
  var element = document.getElementById('example8');
  var html = '<ul>';
  for (var i = 0, lgth = tweets.length; i < lgth ; i++) {
    var tweetObject = tweets[i];
    html += '<li>'
      + (tweetObject.image ? '<div class="tweet-img"><img src="'+tweetObject.image+'" /></div>' : '')
      + '<p class="tweet-content">' + tweetObject.tweet + '</p>'
      + '<p class="tweet-infos">Posted on the ' + tweetObject.time + ', by ' + tweetObject.author + '</p>'
      + '<p class="tweet-link"><a href="' + tweetObject.permalinkURL + '">Link</a></p>'
    + '</li>';
  }
  html += '</ul>';
  element.innerHTML = html;
}

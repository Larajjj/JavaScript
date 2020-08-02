Some useful websites:
JS documantation:  https://developer.mozilla.org/en-US/docs/Web/JavaScript
Principles of Writing Consistent, Idiomatic JavaScript:  https://github.com/rwaldron/idiomatic.js

//STRING CONCATENATION 
var message="Hello";
var name="John";
alert(message+" there"+", "+ name+".");


//STRING LENGTHS & RETRIEVING THE NUMBER OF CHARACTERS 
var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length
alert("You've written "+tweetCount+" characters, you have "+(140-tweetCount)+"characters remaining.")


// SLICING & EXTRACTING
var tweet = prompt("Compose your tweet:");
var tweetUnder140 = tweet.slice(0,140);
alert(tweetUnder140);

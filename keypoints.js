Some useful websites:
JS documantation:  https://developer.mozilla.org/en-US/docs/Web/JavaScript
Principles of Writing Consistent, Idiomatic JavaScript:  https://github.com/rwaldron/idiomatic.js
http://stanford.edu/~cpiech/karel/ide.html


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


// CHANGING CASING
var name = prompt("What is your name?");
nameSlice = name.slice(0,1);
nameSlice = nameSlice.toUpperCase();
nameRemain = name.slice(1,);
nameRemain = nameRemain.toLowerCase();
nameSlice = nameSlice.toUpperCase();
alert("Hello, "+nameSlice+nameRemain);


var dogAge = prompt("How old is your dog:");
var humanAge = (dogAge-2)*4+21;
alert("Your dog is "+humanAge+" year old in human years.");



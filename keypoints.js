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


// FUNCTIONS
function main(){
   moveFourTimes();
   turnLeft();
   moveFourTimes();
}

function moveFourTimes(){
   move();
   move();
   move();
   move();
}

//Diagonal beeper
function main(){
   putBeeper();
   diagonal_beeper();
   diagonal_beeper();
   diagonal_beeper();
   diagonal_beeper();
}
function diagonal_beeper(){
   move();
   turnLeft();
   move();
   putBeeper();
   turnRight();
}

//Alternalte beeper
function main(){
   putBeeper();
   direction();
   direction();
   direction();
   alt_beep();
   turnLeft();
   alt_beep();
   move();
   turnLeft();
   move();
   putBeeper();
   small_dir();
   small_dir();
   small_dir();
   
}
function small_dir(){
   turnLeft();
   alt_beep();
}
function direction(){
   alt_beep();
   alt_beep();
   turnLeft(); 
}
function alt_beep(){
   move();
   move();
   putBeeper();
   
}


//PARAMETERS AND ARGUMENTS
function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  var numOfBottles = money/1.5

  console.log("buy "+ Math.floor(numOfBottles)+ " bottles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(10);



function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    var remain = 90-age;
    var x = remain*365;
    var y = remain*52;
    var z = remain*12;
    console.log('You have '+x+' days, '+y+' weeks, and '+z+' months left.');
    
    
/*************Don't change the code below**********/
}


//OUTPUTS & RETURN VALUES
(a)
function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  var numOfBottles = money/1.5

  console.log("buy "+ Math.floor(numOfBottles)+ " bottles of milk");
   
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return money%1.5;
}
var change = getMilk(6);
console.log(change);


(b)
function getMilk(money,costPerBootle) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  

  console.log("buy "+ clacBottles(money,costPerBootle)+ " bottles of milk");

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return calcChange(money,costPerBootle);
}


function clacBottles(startingMoney, costPerBootle){

    var numOfBottles = Math.floor(startingMoney/costPerBootle);

    return numOfBottles;
}


function calcChange(startingMoney, costPerBootle){

    var change = startingMoney % costPerBootle;

    return change;
}


console.log("Hello master, here is your "+getMilk(5, 1.5)+" change");

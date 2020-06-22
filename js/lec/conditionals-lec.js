"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin

var isAdmin = false;
if(isAdmin) {
//Show Navbar code inside this if statement
}



//TODO Together: Send a 20% off coupon if its users birthday
var birthday = true;

if(birthday) {
//Send 20% off coupon.
}

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true

/*
var isRainy = true;
if(isRainy) {
    alert("It's raining.")
}
*/

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.

/*
var itemCost = 100;
var currentBalance = 200;
if (itemCost > currentBalance) {
alert("item cost is greater than current balance. Earn more money.")
}
*/


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0

/*
var numberOfLives = 0;
if (0 === numberOfLives) {
    alert("Sorry, game over.");
}
 */

//Previous exercise as a function:

/*
function isGameOver(numOfLives) {
console.log("Current lives: " + numOfLives)
if (numOfLives === 0){
alert("Sorry, game over.")
    }
}

isGameOver(6) // doesnt show alert
// isGameOver(0) // shows alert "Sorry, game over."

*/




//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

/*
var weather = "snowing";
if ("snowing") {
    alert("It's snowing.")
}
 */



//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10


/*
var numberInput = 18;
if (20 > numberInput > 10 ) {
    alert("true");
}

*/


//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.



// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar

/*
var isAdmin = false;
if (isAdmin) {
    //showNav1
} else {
    // showNav2
}
*/




//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"

// var isRainy = true;
// if (isRainy) {
//     alert("It's raining.")
// } else {
//     alert("Have a nice day!")
// }

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

// var numberOfLives = 5;
// if (numberOfLives === 0) {
//     alert("Sorry, game over.")
// } else {
//     alert("Next Level!");
// }


//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

// var weather = "snowing";
// if (weather === "snowing") {
//     alert("It's snowing!")
// } else {
//     alert("Check back later for more details!");
// }


//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

// var numberInput = 11;
// if (numberInput >= 10) {
//     alert("true")
// } else {
//     alert("the number is less than 10.")
// }

//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.

// function isGameOver(numOfLives) {
//     if (numOfLives === 0) {
//         alert("Sorry, game over.")
//     } else {
//         alert("You have " + numOfLives + " lives left.")
//     }
// }
// isGameOver(6)


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// var age = 14;
// if (age >= 13) {
//     alert("You may proceed.")
// } else {
//     alert("Sorry, you are not able to proceed.")
// }



// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

// var weather = "snowing";
// if (weather === 'snowing') {
//     alert("It's snowing.")
// } else if (weather === "raining"){
//     alert("It's raining.")
// } else {
// alert ("Have a nice day!")
// }

//TODO Together: refactor the above statement as a function

/*
function checkWeather(weather){
    if (weather === 'snowing') {
        alert("It's snowing.")
    } else if (weather === "raining"){
        alert("It's raining.")
    } else {
        alert ("Have a nice day!")
    }
}

checkWeather("raining")

*/



//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

/*
let checkTrafficLight = function(color) {
    if (color === "green") {
        alert("Safe to proceed.")
    } else if (color === "yellow") {
        alert("Slow down.")
    } else if (color === "red") {
    } else {
        alert("Please enter: Red, Yellow, or Green.")
    }
}
*/



// ================ NESTED STATEMENTS ===============
//TODO Together:
// 1) If user is under 15, they are not eligible for a learners permit, else they are.
// 2) If they are eligible, check age. If they are 15 they are eligible for a learners permit,
// 3) if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligible for a license.

// var age = 10;
// var hasPermit = true;
// if (age < 15) {
//     alert("You are not eligible for a learners permit.")
//     } else {
//     if (age >= 16 && hasPermit) {
//     alert("You are eligible for a license.")
//     } else if (age >= 16 && !hasPermit) {
//         alert("You are not eligible for a license, because you do not have a permit.")
//     } else {
//         alert("You are eligible for a learners permit.")
//     }
// }




// ================ TERNARY STATEMENT ================
//TODO Together: Regular way - rewrite as ternary

/*var message;
var success = true;
var name ='hung';*/

// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);

//WRITE YOUR TERNARY STATEMENT HERE!

// Usual layout:
/*message = (success) ?  'value if true' : 'value if false';
console.log(message);

message = (success) ?  'Operation was successful.' : 'Oops, something went wrong.';
console.log(message);

message = (success) ?  'Operation was successful.' :(name === 'hung') ? 'helo, hung' : 'Oops, something went wrong.';
console.log(message);*/



//TODO: Refactor the following conditional as a ternary

/*

var weather = "sunny";
var weatherMessage;

if(weather === "rainy"){
   weatherMessage = "It's raining!";
} else {
    weatherMessage = "Have a nice day!";
}
console.log(weatherMessage);*/

//WRITE YOUR TERNARY STATEMENT HERE!

/*var weather = "rainy";
var weatherMessage;

weatherMessage = (weather === 'rainy') ? 'Grab your umbrella!' : 'Enjoy this beautiful day!';
console.log(weatherMessage);*/

// =============== SWITCH STATEMENT ================
//SWITCH STATEMENT SYNTAX

/*var condition  = xxx;
switch (condition) {
    case case1:
        //actual code
        break;
    case case2:
        //code
        break;
    default:
        //default or 'else' case
    }*/

// var num = 0;
// switch (num) {
//     case 0: //Checks if number is  === 0
//         console.log(num)
//         break;
//     case 1:
//         console.log(num)
//         break;
//     default:
//         console.log("you entered something not 0 - 3")
//         //default or 'else' case
//     }


//TODO Together:
// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// } else if (pizzaPreference === "ham") {
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }


/*
var pizzaPreference = prompt("What kind of pizza do you like?");
console.log("User pizza input: " + pizzaPreference);

switch(pizzaPreference) {
    case "pineapple and hot sauce":
        alert("What a coincidence, that.s my favorite!");
        break;
    case "cheese":
        alert("Just plain cheese? Okay...");
        break;
    case "ham":
        alert("Ham is easy to spell and awesome!");
        break;
    default:
            alert(pizzaPreference + " isn't my favorite, but let's order some!");
}
*/


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.

var todaysWeather = "foggy"

switch(todaysWeather) {
    case "rainy":
        alert("Make sure to grab an umbrella!");
        break;
    case "sunny":
        alert("Bask in that sun today!");
        break;
    case "snow":
        alert("It's time to make a snowman!");
        break;
    default:
        alert("It's something altogether else..");
}



//TODO: Rewrite the intersection function from earlier as a switch statement.

// var trafficLight = "purple"
//
// switch(trafficLight) {
//     case "red":
//         alert("Stop!");
//         break;
//     case "yellow":
//         alert("Slow down.");
//         break;
//     case "green":
//         alert("Safe to proceed.");
//         break;
//     default:
//         alert("Please enter: Red, Yellow, or Green.");
// }


// ================ REVERSE ENGINEERING =================
// Visit each of these links; outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output

// > If Statement
// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html

// > If/Else Statement
// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html

// > Ternary
// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html


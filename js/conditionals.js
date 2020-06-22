"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


function analyzeColor(color) {
    if (color === 'blue') {
        console.log("blue is the color of the sky")
    } else if (color === 'red') {
        console.log("Strawberries are red")
    }  else if (color === 'cyan') {
        console.log("I don't know anything about cyan")
    } else {
        console.log("that's okay too")}
}

analyzeColor('purple')


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/*function analyzeColor(color) {
   if (color === 'blue') {
       console.log("blue is the color of the sky")
   } else if (color === 'red') {
       console.log("Strawberries are red")
   }  else if (color === 'cyan') {
       console.log("I don't know anything about cyan")
   } else {
       console.log("that's okay too")}
}

analyzeColor(randomColor)*/

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/*// var color = "idk"
var color = "red"

switch(color) {
    case "red":
        console.log("Strawberries are red");
        break;
    case "blue":
         console.log("blue is the color of the sky");
        break;
    case "cyan":
        console.log("I don't know anything about cyan");
        break;
    default:
        console.log("that's okay too");
}*/

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/*let faveColor = prompt("What is your fave color?");
    if (faveColor === 'blue') {
        console.log("blue is the color of the sky");
    } else if (faveColor === 'red') {
        console.log("Strawberries are red");
    }else if (faveColor === 'cyan') {
        console.log("I don't know anything about cyan");
    } else {
        console.log("that's okay too");
    }*/

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is
 * 0 you have no discount,
 * if your lucky number is 1 you'll get a 10% discount,
 * if it's 2, the discount is 25%,
 * if it's 3, 35%,
 * if it's 4, 50%,
 * and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/*function calculateTotal(luckyNum, total) {
    if (luckyNum === 1) {
    alert("Your total with a 10% discount is: $" + toFixed((total * .90)))
    } else if (luckyNum === 2) {
        alert("Your total with a 25% discount is: $" + toFixed((total * .75)))
    } else if (luckyNum === 3) {
        alert("Your total with a 35% discount is: $" + toFixed((total *.65)))
    } else if (luckyNum === 4) {
         alert("Your total with a 50% discount is: $" + toFixed((total * .50)))
    } else if (luckyNum === 5) {
        alert("Your total with a 100% discount is: $" + toFixed((total - total)))
    } else {
        alert("Your total is: $" + toFixed(total))
}
}

calculateTotal(0, 100) // returns 100
calculateTotal(4, 100) // returns 50
calculateTotal(5, 100) // returns 0
calculateTotal(6, 100) // returns 100

*/
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

// Generate a random number between 0 and 6
var luckyNum = Math.floor(Math.random() * 6);

let newTotal;
let discountPercent;
let notAWinner = false;
let total = parseFloat(prompt("What is you total bill?"));

if (luckyNum === 1) {
    newTotal = (total * .90).toFixed(2);
    discountPercent = "10%";
} else if (luckyNum === 2) {
    newTotal = (total * .75).toFixed(2);
    discountPercent = "25%";
} else if (luckyNum === 3) {
    newTotal = (total * .65).toFixed(2);
    discountPercent = "35%;"
} else if (luckyNum === 4) {
    newTotal = (total * .50).toFixed(2)
    discountPercent = "50%";
} else if (luckyNum === 5) {
    newTotal = 0;
    discountPercent = "100%";
} else {
    notAWinner = true;
}

if(notAWinner) {
    alert("Your lucky number is not a winner. Your total is $" + total)
} else {
    alert("Your lucky number is: " + luckyNum + ". Your original total of $" + total + " is now $" + newTotal + " with a "+discountPercent+" discount.")



/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
/*

let numberConfirm = confirm("Would you like to enter a number? OK for yes - Cancel for no");
if (numberConfirm) {
    let numberPrompt = parseInt(prompt("Enter a number"))
    if (numberPrompt % 2 === 0) {
        alert("This number is even.")
    } else {
        alert("This number is odd.")
    }
// Adding the userPrompt to 100
    if (numberPrompt) {
        alert("100 + " + numberPrompt + " = " + (numberPrompt + 100)
    }

// Checking to see if the userPrompt is positive or negative 
        if (numberPrompt < 0) { 
        alert("This number is negative.") 
        } else if (numberPrompt > 0)
        { alert("This number is positive.") 
        } else if (numberPrompt === 0) { 
        alert("This number is neither negative or positive.") 
        }  
    }

*/

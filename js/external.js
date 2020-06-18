// Add a console.log message in external.js that says "Hello from external JavaScript".

/*
console.log("Hello from external JavaScript")
*/

// 1. Use the alert function to show a message that says 'Welcome to my Website!'.

/*

alert ("Welcome to my Website!")

*/

// 2. Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
//
//         For example, if the user enters "blue", your code should alert a message that says:
//
//         "Great, blue is my favorite color too!"

/*
let color = prompt("What is you favorite color?");
if (color === "blue")
    alert("Great, blue is my favorite color too!")
else
    alert ("It's okay to have different opinions.");
 */


// 3. Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
//
//          When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
//     Use an alert to show the results of each problem.



// A: You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

//
//
// let littleM = parseInt(prompt("How many days will you rent The Little Mermaid?"))
// let brotherB = parseInt(prompt("How many days will you rent Brother Bear?"))
// let hercules = parseInt(prompt("How many days will you rent Hercules?"))
// alert("Your total cost is: $" + (littleM + brotherB + hercules) * 3));


// B: Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.


// const googleRate = 400
// const amazonRate = 380
// const facebookRate = 350
// let googleHours = (prompt("How many hours did you work for Google?"))
// let facebookHours = (prompt("How many hours did you work for Facebook?"))
// let amazonHours = (prompt ("How many hours did you work for Amazon?"))
// alert("Your total pay is: $" + ((googleHours * googleRate) + (amazonHours * amazonRate) + (facebookHours * facebookRate)));



// C: A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

// let isClassOpen = confirm("Is there room in the class?")
// let isScheduleOpen = confirm ("Is your schedule open?")
// alert("You are now enrolled = " + (isClassOpen && isClassOpen))




// // D: A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

// let moreThan2 = confirm("Did you buy more than 2 items?")
let numberItemsPurchase = parseInt(prompt("How many items did you buy?"))
let offerValid = confirm("Is the offer valid?")
let premiumMem = confirm("Do you have a premium membership?")
alert("Offer is applied = " + ((numberItemsPurchase>2 || premiumMem) && offerValid))
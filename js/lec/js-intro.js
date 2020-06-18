// in class exercise
console.log('1' + 2) // Answer: '12"
console.log(typeof '1' + 2) // Answer: string2
console.log(6 % 4) // Answer: 2
console.log('3 + 4 is ' + 3 + 4) // Answer: "3+4 is 34" fix: '3+4 is ' is (3+4)
// how could you make this produce the correct output?
console.log(0 < 0) // Answer: False
console.log('false' == false) // Answer: False because false is a boolen value
console.log(true == 'true') // Answer: False because true is a boolean
console.log(5 >= -5) // Answer: False (?) but thise seems like a trick
console.log(!false || false) // Answer: Ture
console.log(true || "42") // Answer: True
console.log(!true && !false) // Answer: False
console.log(6 % 5) // Answer: 1
console.log(5 < 4 && 1 === 1) // Answer: False
console.log(typeof 'codeup' === 'string') // Answer: True
console.log('codeup' === 'codeup' && 'codeup' === 'Codeup') // Answer: False
console.log(4 >= 0 && 1 !== '1') // Answer: True
console.log(6 % 3 === 0) // Answer: True
console.log(5 % 2 !== 0) // Answer: True


// Exercise Part 1:

//Question 1
// what is the value of a, b, and c?
var a = 1; // Answer: 1
var b = a++; // Answer: 1
var c = ++a; // Answer: 3


//Question 2
var d = "hello";
var e = false;

d++; // Answer: NaN because you can't increase words / non numbers
e++; // Answer: e=1 because e was incremented by 1 and is false (false = 0, true = 1)

//Question 3
var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2; // Answer: NaN because (undefined + 2 cannot = a number)

//Question 4
var price = 2.7;
price.toFixed(2);
// Answer "2.70" - shows number with two numbers to the right of decimal (as a string)

//Question 5
var price = "2.7";
price.toFixed(2);
//Answer: Error because "2.7" is a string

//Question 6 - isNaN is false when the VALUE of a input equals a number
isNaN(0) //Answer: false
isNaN(1) //Answer: false
isNaN("") //Answer: false (see "falsy" documentation on MDN for explanation)
isNaN("string")//Answer: true
isNaN("0")//Answer: false
isNaN("1")//Answer: false
isNaN("3.145")//Answer: false
isNaN(Number.MAX_VALUE)//Answer: false
isNaN(Infinity)//Answer: false
isNaN("true") //Answer: true
isNaN(true) //Answer: false
isNaN("false") //Answer: true
isNaN(false) //Answer: true
// to illustrate why the isNaN() function is needed:
NaN == NaN


!true //Answer: false (not true)
!false //Answer: true (not false)
!!true //Answer: true (not not true)
!!false //Answer: false (not not false)
!!0 //Answer: false (falsy)
!!-0 //Answer: false (falsy)
!!1 //Answer: true
!!-1 //Answer: true
!!0.1 //Answer: true
!!"hello" //Answer: true
!!"" //Answer: false
!!'' //Answer: false
!!"false" //Answer: true
!!"0" //Answer: true

// Part 2 - Execute the following statement in the Chrome JavaScript console and then follow the directions below
var sample = "Hello Codeup";
// Use .length to find the number of characters in the string.

sample.length //Answer: 12

// Try to make the sample string all upper or all lower case.

sample.toLowerCase()

// Update the variable sample via concatenation so that it contains "Hello Codeup Students".

var sample = (sample + " Students")

// Replace "Students" with "Class".

sample = sample.replace("Students", "Class")

// Find the index of "c" using .indexOf(). What do you observe?

sample.indexOf("c") //Answer: -1

// Find the index of "C" using .indexOf().

sample.indexOf("C") //Answer: 6

// Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().

sample.substring(sample.indexOf("C"),sample.indexOf("p") + 1) //the plus makes sure you get to AFTER the p


// Part 3 - Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.



// A: You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
var littleM = 3;
var brotherB = 5;
var hercules = 1;

var totalCost = ((littleM + brotherB + hercules) * 3)

console.log("Your total cost is: $" + totalCost);



// B: Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var googlePay = 400;
var amazonPay = 380;
var facebookPay = 350;

var googleHours = 6;
var facebookHours = 10;
var amazonHours = 4;

var totalPay = (googleHours * googlePay) + (amazonHours * amazonPay) + (facebookHours * facebookPay);

console.log("Your total pay is: $" + totalPay);

// C: A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

var enrolled;
var notFull = true;
var notConflict = true;

console.log(enrolled); // This will return undefined because we have not defined what enrolled is.

enrolled = notFull & notConflict;

console.log(enrolled); // Will now return 1 and 1=true)

// D: A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

var moreThan2 = true;
var notExpired = true;
var premiumMem = false;

var offerApplied = (moreThan2 && notExpired) || (premiumMem && notExpired);

//cleaner version:
var offerApplied = (moreThan2 || premiumMem) && notExpired;


// Part 4: Use the following code to follow the instructions below:

var username = 'codeup';
var password = 'notastrongpassword';

//Create a variable that holds a boolean value for each of the following conditions:

//the password must be at least 5 characters
var pass5 = password.length >= 5;

// the password must not include the username

var passNoUN = password.indexOf(username) === -1;


// the username must be no more than 20 characters

var noLeadingTrailingWS = (username === username.trim() && password === password.trim());



console.log(noLeadingTrailingWS)


// neither the username or password can start or end with whitespace





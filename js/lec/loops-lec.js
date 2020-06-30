//loop with decrement
/*let dollars = 7;

while (dollars > 0) {
    console.log("We have money!")
    dollars--;
}
console.log("We are broke")
*/

// loop wth increment
/* let times = 0;

while (times < 10) {
    times++;
    console.log("We have done this " + times + " times.");
}

console.log("We are done.")

*/

// loop wth increment
/* let bottles = 99;

while (bottles > 0) {
    console.log(bottles + " bottles of beer on the wall");
    console.log(bottles + " bottles of beer");
    console.log("Take one down.");
    console.log("Pass it around.");
    bottles--;
    console.log(bottles + " bottles of beer on the wall");
    console.log("");
}

console.log("We are done.");
 */

//For loop with guessing game
/*
let x = Math.floor((Math.random() * 10) + 1);
console.log(x);
alert("Let's play a guessing game.");
let guess = prompt("I chose a number between 1 and 10. Guess what it is.");

while (guess != x) {
    alert("Try again.")
    guess = prompt("I chose a number between 1 and 10. Guess what it is.");
}
    alert("You guess right!!");

 */

//Do-While loop with guessing game
/*
let x = Math.floor((Math.random() * 10) + 1);
console.log(x);
let guess;
alert("I chose a number between 1 and 10. Guess what it is.");

do {
    guess = prompt("Guess until you get it.");
} while (guess != x) ;

alert("You guess right!!");
 */

//Do-While loop with conditional nested and continues and breaks
/*
let x = Math.floor((Math.random() * 10) + 1);
console.log(x);
alert("Let's play a guessing game!");
let guess;
do {
    guess = prompt("I chose a number between 1 and 10. Guess what it is.");
    if (guess != x) {
        alert("No, that wasnt it.");
        continue;
    }
    else
    {
        alert("You guessed the number!");
        break;
    }
} while (true);
*/

// For loop example
// Take this:
/*
let x = 1;
while (x <= 10) {
    console.log(x);
    x++;
}
 */

 // And turn into this
/*for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Little monkeys jumping on the bed with a for loop


for (let monkeys =9; monkeys > 0; monkeys--) {
    console.log(monkeys + " little monkeys jumping on the bed");
    console.log(" one fell off and bonked his head");
    console.log(" Momma called the doctor and the doctor said");
    console.log("No more monkeys jumping on the bed!");
    console.log("");
    }
 */

 for (let i=1; i<=20;i+=2) {
 // if (i % 2 === 0) {
     console.log(i);
 // }
 }


let multiply = function (a, b) {
    let answer = 0;
    for (let i = 0; i < b; i++) {
        answer += a;
    }
    return answer;
}

console.log(multiply(4, 5))
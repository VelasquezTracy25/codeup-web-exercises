"use strict";

(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

     let names = ['Tracy', "Brian", "Ray", "Alexa"];
     console.log(names)

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

     console.log(names.length)

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log("The shape at index 1 is: " + names[0])
    console.log("The shape at index 1 is: " + names[1])
    console.log("The shape at index 1 is: " + names[2])
    console.log("The shape at index 1 is: " + names[3])


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (let i = 0; i < names.length; i++) {
        console.log('The names at index ' + i + " is " + names[i] + ".")
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

     names.forEach(myOwnFunction); //"for each time i call this function"

     function myOwnFunction(buddy, index) {
         console.log('The shape at index ' + index + " is " + buddy + ".")}

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    let elements = [1, 2, 3, 4, 5]

    // below returns 1
    let first = function() {
        return elements[0]
    }

    // below returns 2
    let second = function() {
        return elements[1]
        }

    // below return 5
    let last = function() {
        return elements[elements.length - 1]
    }

    console.log(first() + " - should return 1")
    console.log(second() + " - should return 2")
    console.log(last() + " - should return 5")


})();

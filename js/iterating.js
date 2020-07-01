(function(){
    // "use strict";
    //
    // /**
    //  * TODO:
    //  * Create an array of 4 people's names and store it in a variable called
    //  * 'names'.
    //  */
    //
    //  let myOwnArray = ['Tracy', 26, "Brian", 28, "Ray", 32, "Alexa", 20];
    //  console.log(myOwnArray)
    //
    // /**
    //  * TODO:
    //  * Create a log statement that will log the number of elements in the names
    //  * array.
    //  */
    //
    //  console.log(myOwnArray.length)
    //
    // /**
    //  * TODO:
    //  * Create log statements that will print each of the names individually by
    //  * accessing each element's index.
    //  */
    //
    // var notice = ("The shape at index 1 is: " + myOwnArray[1] + "/n" +
    // "The shape at index 1 is: " + myOwnArray[1] + "/n" +
    // "The shape at index 2 is: " + myOwnArray[2] + "/n" +
    // "The shape at index 3 is: " + myOwnArray[3] + "/n" +
    // "The shape at index 4 is: " + myOwnArray[4] + "/n" +
    // "The shape at index 5 is: " + myOwnArray[5] + "/n" +
    // "The shape at index 6 is: " + myOwnArray[6] + "/n" +
    // "The shape at index 7 is: " + myOwnArray[7] + "/n" +
    // "The shape at index 8 is: " + myOwnArray[8])
    //
    // console.log(notice)
    //
    //
    // /**
    //  * TODO:
    //  * Write some code that uses a for loop to log every item in the names
    //  * array.
    //  */
    //
    // for (let i = 0; i < myOwnArray.length; i++) {
    //     console.log('The shape at index ' + i + " is " + myOwnArray[i] + ".")
    // }
    //
    // /**
    //  * TODO:
    //  * Refactor your above code to use a `forEach` loop
    //  */
    //
    //  myOwnArray.forEach(myOwnFunction); //"for each time i call this function"
    //
    //  function myOwnFunction(buddy, index) {
    //      console.log('The shape at index ' + index + " is " + buddy + ".")}

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

    let params = [1, 2, 3, 4, 5]


    // below returns 1

    function first(params){
        console.log(params[0])
    }

    // below returns 2

    function second(params){
        console.log(params[1])
    }

     // below return 5
    function last(params){
        console.log(params[4])
    }

console.log(first())





})();

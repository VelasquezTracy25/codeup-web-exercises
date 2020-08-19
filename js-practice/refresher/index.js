let name = "Tracy";
console.log(name);

let firstName = "Tracy";
firstName = "Brian";
let lastName = "Velasquez";
console.log(firstName, lastName);

//Person object:
let person = [
    {
        name: "Tracy",
        age: "26",
    },
    {
        name: "Brian",
        age: "29",
    },
    {
        name: "Ray",
        age: "34",
    },
];
console.log(person)
console.log("This is a person: \n Name: " + person[0].name + "\n Age: " + person[0].age);
console.log("This is another person: \n Name: " + person[1].name + "\n Age: " + person[1].age);

// Arrays (technically an object so you cab find different key:value pairs)
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors[0]); //prints red
console.log(selectedColors[1]); //prints blue
console.log(selectedColors); //prints ["red", "blue", "green"]
console.log(selectedColors.length); //prints 3

//JS
function greet(name){
    console.log("Hello World " + name);
}

greet(person[1].name);




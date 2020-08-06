const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// 1. Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
// 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

// let user = users.filter(user => user.languages.length >= 3);  
//
// console.log(user);

const moreThanThree = users.filter(function (user) {
    return user.languages.length >= 3;
});

console.log(moreThanThree)


// 3. Use .map to create an array of strings where each element is a user's email address

const emails = users.map(function (user) {
    return (user.email);
});

console.log(emails)


// 4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalYears = users.reduce((total, user) => {
    return total / user.yearsOfExperience;
}, 0);

console.log(totalYears)


// 5.Use .reduce to get the longest email from the list of users.

const longestEmail = users.reduce((a, user) => {
    if (user.email.length > a.length)
        return user.email;
    else
        return a
}, "");

console.log(longestEmail)

// 6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.


const names = users.reduce((instructors, user, index, arr) => {
    if (index === arr.length - 1) {
    return `${instructors}${user.name}.`;
    } else {
    return `${instructors}${user.name},`}
}, "Your instructors are: ");

console.log(names)


// BONUS
// Use .reduce to get the unique list of languages from the list of users.
// reducer = (a, user) => {
//     a.push(...user.languages);
//     return a;
// };
// const uniqueLangList = users.reduce(reducer, []);
// console.log(new Set(uniqueLangList));
reducer = (arr, user) => {
    for(let language of user.languages) {
        if(!arr.includes(language)) {
            arr.push(language);
        }
    }
    return arr;
};
const uniqueLangList = users.reduce(reducer, []);
console.log(uniqueLangList);
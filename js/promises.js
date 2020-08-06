const githubInfo = username => {
    fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': githubAccessToken}})
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let date = ""
            for (let datum of data) {
                if (datum.type === "PushEvent") {
                    date = datum.created_at;
                    break;
                }
            }
            return date
        }).then(date => document.getElementsByTagName("body")[0].innerText = date);
}

githubInfo("VelasquezTracy25")



// const githubInfo = fetch('https://api.github.com/users/JessRG/events/public', {headers: {'Authorization': githubAccessToken}})
//     .then(response => response.json())

/**
* Pull directly from repo
// https://api.github.com/repos/VelasquezTracy25/codeup-web-exercises/commits
*/


let wait = number => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof number === "number") {
                resolve(number / 1000)
            } else {
                reject("it didn't work")
            }
        }, number);
    });
}

wait(1000).then((timeout) => console.log(`You\'ll see this after ${timeout} ${timeout > 1 ? "seconds" : "second" }`));
wait(3000).then((timeout) => console.log(`You\'ll see this after ${timeout} ${timeout > 1 ? "seconds" : "second" }`));
wait(10000).then((timeout) => console.log(`You\'ll see this after ${timeout} ${timeout > 1 ? "seconds" : "second" }`));
wait("ndkjgndkjg").then((timeout));


// Hannah's Methods/ Walkthrough
// const delay = t => new Promise(resolve => setTimeout(resolve, t));
// delay(3000).then(() => console.log("you will see this after 3 second"));
//

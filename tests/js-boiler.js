// let ["kiwi", "mango", "strawberry"]arr = ["kiwi", "mango", "strawberry"];

function shortestString(arr){
    for(var i=0;i<arr.length;i++){
        return Math.min(arr[i].length);
    }
    i++;
    return Math.min(arr[i].length);
}

console.log(shortestString(["kiwi", "mango", "strawberry"]))

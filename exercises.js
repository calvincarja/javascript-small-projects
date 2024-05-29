/* 
// function to count the amount of times the string "true" appears in the array
let values = ["true", "false", "true", "false"];
let count = 0;
values.forEach((value) => {
    if (value === "true") {
        count++;
    }
});

console.log(count);
*/


function countsheep(sheep) {
    let count = 0;
    for (let x of sheep) {
        if (x === "true") {
            count++;
        }
    }
    return count;
}

let values = ["true", "false", "true", "false"];

console.log(countsheep(values)); // 2

// vs

function countsheep(sheep) {
    return sheep.filter(x => x === "true").length; // filter creates an array with the elements that pass the test
}

let values1 = ["true", "false", "true", "false"];

console.log(countsheep(values1));

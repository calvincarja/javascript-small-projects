/* Array Lesson ****************************************************

// function to count the amount of times the string "true" appears in the array
let values = ["true", "false", "true", "false"];
let count = 0;
values.forEach((value) => {
    if (value === "true") {
        count++;
    }
});

console.log(count);



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
// in javascript, @include is more flexible than @match
*/

// user script examples ****************************************************

// find specific field


/*
const fieldname = 'Display Title Tag';
// const field = document.querySelector('[name="${fieldname}"]'); // there was an issue with the quotes, i needed to use backticks

const fieldElement = document.querySelector(`[name="${fieldname}"]`);
*/


/*
The $ sign is not a special character in this context; it's just a part of the template literal syntax.
Here's a breakdown of the syntax:
${}: Template literal placeholder
fieldName: The variable being inserted into the string
*/


/*


if (fieldElement) {
    console.log('Field "${fieldname}" found:', fieldElement);
}
*/

// put together into a function
(function () {

    const fieldname = 'Display Title Tag';
    const fieldElement = document.querySelector(`[name="${fieldname}"]`);

    if (fieldElement) {
        console.log(`Field "${fieldname}" found:`, fieldElement);
    }
})

// add an eventlistener to the function
document.addEventListener('DOMContentLoaded', function () {
    (function () {
        'use strict';
        const fieldname = 'Display Title Tag';
        const fieldElement = document.querySelector(`[name="${fieldname}"]`);

        if (fieldElement) {
            console.log(`Field "${fieldname}" found:`, fieldElement);
        } else {
            console.log(`Field "${fieldname}" not found`);
        }
    })();
});

// rewriting the function to a simple wait, and find keyword approach
setTimeout(function(){
    const keyword = "Display Title";
    const pageText = document.body.textContent; // dom element
    if (pageText.includes(keyword)) {
      console.log(`Keyword "${keyword}" found!`);
    } else {
      console.log(`Keyword "${keyword}" not found!`);
    }
  }, 5000); // Wait 5 seconds before searching for the keyword

// rewrote again to display all the labels on the page
setTimeout(function(){
    const labels = Array.from(document.querySelectorAll('label')); // convert the nodelist to an array
    labels.forEach(label => console.log(label.textContent)); // loop through the array and log the text content of each label
  }, 5000); // Wait 5 seconds before searching for the keyword
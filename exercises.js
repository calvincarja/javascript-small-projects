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


// check if label value field is emtpy
setTimeout(function(){
    const labels = Array.from(document.querySelectorAll('label')); // convert the nodelist to an array
    labels.forEach(label => {
        if (label.textContent.trim() === "") {
            console.log(`Label "${label.textContent}" is empty`);
        } else {
            console.log(`Label "${label.textContent}" is not empty`);
        }
    });
}, 5000); // Wait 5 seconds before searching for the keyword

// onyl find labels within a specific div
setTimeout(function(){
    const specificClass = document.querySelector('.required-fields field-group-html-element');
        const labels = Array.from(specificClass.querySelectorAll('label')); // convert the nodelist to an array
        labels.forEach(label => {
            if (label.textContent.trim() === "") {
                console.log(`Label "${label.textContent}" is empty`);
            } else {
                console.log(`Label "${label.textContent}" is not empty`);
            }
        });
}, 5000); // Wait 5 seconds before searching for the keyword

// nothing was loaded, lets made the code lighter, and search for a specific class
setTimeout(function(){
    const specificClass = document.querySelector('.col-sm-12'); // i found the exact class
    if (specificClass) {
        const labels = Array.from(specificClass.querySelectorAll('label')); // convert the nodelist to an array
        labels.forEach(label => console.log(label.textContent)); // loop through the array and log the text content of each label
    } else {
        console.log('Class not found');
    }
}, 5000); // Wait 5 seconds before searching for the keyword


// now that i can display each label, now i want to add a text to an empty field - array manipulation

setTimeout(function(){
    const specificClass = document.querySelector(`.col-sm-12`); // i found the exact class
    if (specificClass) {
        const labels = Array.from(specificClass.querySelectorAll('label')); // convert the nodelist to an array
        labels.forEach(label => console.log(label.textContent)); // loop through the array and log the text content of each label
        console.log(labels[2].textContent);// i can access the text content of the label
    } else {
        console.log('Class not found');
    }
}, 5000); // Wait 5 seconds before searching for the keyword


// I want to find the input value for the label, through inspection, the value is set dynamically through javascript

setTimeout(function(){
    const specificClass = document.querySelector(`.col-sm-12`); // i found the exact class
    if (specificClass) {
        const labels = Array.from(specificClass.querySelectorAll('label')); // convert the nodelist to an array
        const inputs = Array.from(specificClass.querySelectorAll('input'));
        labels.forEach((label, index) => {
            console.log(`label: ${label.textContent}, input: ${inputs[index].value}`); // pay attention to how the 
        });
    } else {
        console.log('Class not found');
    }
}, 5000); // Wait 5 seconds before searching for the keyword


// i want to edit an existing input value - lets manipulate the input array
setTimeout(function(){
    const specificClass = document.querySelector(`.col-sm-12`); // i found the exact class
    if (specificClass) {
        const labels = Array.from(specificClass.querySelectorAll('label')); // convert the nodelist to an array
        const inputs = Array.from(specificClass.querySelectorAll('input'));
        const firstinput = inputs[2];
        firstinput.value += 'Dream.Calvin'; // overiding the input present on the page
        labels.forEach((label, index) => {
            console.log(`label: ${label.textContent}, input: ${inputs[index].value}`); // label is text attribute, while input is value attribute. read up
        });
    } else {
        console.log('Class not found');
    }
}, 5000); // Wait 5 seconds before searching for the keyword

// the finding of the .col-sm-12 class is not consistent, researched with AI, found an alternative approach

function Attempttoexecute (retries, delay) { // recursive fucntion
    const specificClass = document.querySelector('.col-sm-12'); // the div that controls the module page designer 
    if (specificClass) {
        const labels = Array.from(specificClass.querySelectorAll('label')); // convert the nodelist to an array
        const inputs = Array.from(specificClass.querySelectorAll('input'));
        const firstinput = inputs[2];
        firstinput.value += 'Dream.Calvin'; // overiding the input present on the page, will need to refresh the page to display
    }
    else if (retries > 0) { // if specificClass returns null, execute this block
        console.log(`Retries remaining: ${retries}`);
        setTimeout(() => Attempttoexecute(retries - 1, delay), delay); // this will restrart the function until the class is found
    }
    else {
        console.log(`class not found after ${retries}`) // use backticks to use tempalte literal
    }

}

Attempttoexecute (10, 5000); // call the function 


// now i want to find the index place of the array item that contains mention of the specific field

function Attempttoexecute (retries, delay) { // recursive fucntion
    const specificClass = document.querySelector('.col-sm-12'); // the div that controls the module page designer 
    if (specificClass) {
        const labels = Array.from(specificClass.querySelectorAll('label')); // convert the nodelist to an array
        const inputs = Array.from(specificClass.querySelectorAll('input'));
        console.log(labels); // i need to see the strucuter of my labels array
        const findarrayitem = labels.find(item => item.textContent.indexOf('Title');
        console.log(findarrayitem);
    }
    else if (retries > 0) { // if specificClass returns null, execute this block
        console.log(`Retries remaining: ${retries}`);
        setTimeout(() => Attempttoexecute(retries - 1, delay), delay); // this will restrart the function until the class is found
    }
    else {
        console.log(`class not found after ${retries}`) // use backticks to use tempalte literal
    }

}

Attempttoexecute (10, 10000); // call the function 


// lite version of my code, no check for div class

const labels = Array.from(document.querySelectorAll('label')); // convert the nodelist to an array
const inputs = Array.from(document.querySelectorAll('input'));
const findarrayitem = labels.find(item => item.textContent.indexOf('Title');
if (findarrayitem) {
    console.log('found title');
}
else {
    console.log('did not find title');
}


// the correct code to find the index of the title label

const labels = Array.from(document.querySelectorAll('label')); // convert the nodelist to an array
labels.forEach(label => console.log('|' + label.textContent + '|')); // this displays the label, in a readble format
const index = labels.findIndex(label => label.textContent.trim().includes("Title")); // find index to find the position, trim to remove spaces, incldues find the mention of title, 


// now lets use the value of index for our second array
const labels = Array.from(document.querySelectorAll('label')); // convert the nodelist to an array
const inputs = Array.from(document.querySelectorAll('input'));
const index = labels.findIndex(label => label.textContent.trim().includes("Title")); // find index to find the position, trim to remove spaces, incldues find the mention of title, 
console.log(inputs[index]);


// rewrite the same code, but within a recurisive function
// Jul 17, 2024

function check4class() {
    const specificClass = document.querySelector(".col-sm-12"); // use if statement to check if value is null or not
    if (!specificClass) {
        console.log("class not found, will re-try in 10 seconds");
        setTimeout(check4class, 10000);
    }
    else {
        const labels = Array.from(document.querySelectorAll('label')); // convert the nodelist to an array
        const inputs = Array.from(document.querySelectorAll('input'));
        const index = labels.findIndex(label => label.textContent.trim().includes("Title"));
        console.log()
    }
}


// using the AI example, lets add a counter - assing a varible as the argument for the function

function check4class(attempt = 1) {
    const specificClass = document.querySelector(".col-sm-12"); // use if statement to check if value is null or not
    if (!specificClass) {
        if (attempt < 4) {
            console.log("class not found, will re-try in 10 seconds");
        setTimeout(() => check4class(attempt + 1), 10000);    
        }
        else {
            console.log("class was not able to be found");
        }
    }
    else {
        const labels = Array.from(document.querySelectorAll('label')); // convert the nodelist to an array
        const inputs = Array.from(document.querySelectorAll('input'));
        const index = labels.findIndex(label => label.textContent.trim().includes("Title"));
        console.log(index);
    }
}

// due to my refresh logic, i need to store the script. taper monkey is not working, thus i will use the bookmark route
// no comments 

(function() {
    function check4class(attempt = 1) {
        const specificClass = document.querySelector(".col-sm-12");
        if (!specificClass) {
            if (attempt < 4) {
                console.log("class not found, will re-try in 10 seconds");
                setTimeout(() => check4class(attempt + 1), 10000);
            } else {
                console.log("class was not able to be found");
            }
        } else {
            const labels = Array.from(document.querySelectorAll('label'));
            const inputs = Array.from(document.querySelectorAll('input'));
            const index = labels.findIndex(label => label.textContent.trim().includes("Title"));
            console.log(index);
        }
    }
    check4class();
})();

// minified version
(function(){function check4class(attempt=1){const specificClass=document.querySelector(".col-sm-12");if(!specificClass){if(attempt<4){console.log("class not found, will re-try in 10 seconds");setTimeout(()=>check4class(attempt+1),10000)}else{console.log("class was not able to be found")}}else{const labels=Array.from(document.querySelectorAll('label'));const inputs=Array.from(document.querySelectorAll('input'));const index=labels.findIndex(label=>label.textContent.trim().includes("Title"));console.log(index)}}check4class()})();

// encoded vesrion

javascript:(function(){function%20check4class(attempt=1){const%20specificClass=document.querySelector(%22.col-sm-12%22);if(!specificClass){if(attempt<4){console.log(%22class%20not%20found,%20will%20re-try%20in%2010%20seconds%22);setTimeout(()=>check4class(attempt+1),10000)}else{console.log(%22class%20was%20not%20able%20to%20be%20found%22)}}else{const%20labels=Array.from(document.querySelectorAll(%27label%27));const%20inputs=Array.from(document.querySelectorAll(%27input%27));const%20index=labels.findIndex(label=>label.textContent.trim().includes(%22Title%22));console.log(index)}}check4class()})();
  
// now i want to include a page refresh.

// mini break - but keep the following in mind: do i want to refresh && settimeout ? what will occur with attempt, i need it to restart so i can have the timeout run again. 
// esentially i want the logic, run settimout 3 times, if it failes, refresh the page, 

function check4class(attempt = 1, pagerefresh = 1) {
    const specificClass = document.querySelector(".col-sm-12"); // use if statement to check if value is null or not
    if (!specificClass) {
        if (attempt < 4) {
            console.log("class not found, will re-try in 10 seconds");
        setTimeout(() => check4class(attempt + 1), 10000);    
        }
        else if (pagerefresh < 4) {
            console.log("set-timeout ran out, will now begin refreshing the page")
            location.reload(true);
        }
        else {
            console.log("class was not able to be found");
        }
    }
    else {
        const labels = Array.from(document.querySelectorAll('label')); // convert the nodelist to an array
        const inputs = Array.from(document.querySelectorAll('input'));
        const index = labels.findIndex(label => label.textContent.trim().includes("Title"));
        console.log(index);
    }
}

// code version that includes localstorage, two index varibles

function check4class() {
    // Retrieve the attempt and refresh values from local storage or initialize them
    let attempt = parseInt(localStorage.getItem('attempt') || '1');
    let refresh = parseInt(localStorage.getItem('refresh') || '0');

    // Attempt to find the specific class
    const specificClass = document.querySelector(".col-sm-12");

    if (!specificClass) {
        if (attempt <= 4) { // Run the setTimeout loop 4 times
            console.log(`class not found, will re-try in 10 seconds (attempt ${attempt}/4)`);

            // Store the current attempt count in local storage
            localStorage.setItem('attempt', attempt);

            // Set a timeout to re-check the class after 10 seconds
            setTimeout(() => {
                localStorage.setItem('attempt', attempt + 1);
                check4class();
            }, 10000);
        } else if (refresh < 3) { // Limit to 3 page refreshes
            console.log("Max attempts reached, refreshing the page");

            // Increment the refresh count and store it in local storage
            localStorage.setItem('refresh', refresh + 1);

            // Reset the attempt counter and store it in local storage
            localStorage.setItem('attempt', '1');

            // Perform a server refresh
            location.reload(true); // true forces a server refresh
        } else {
            console.log("class was not able to be found after maximum refreshes");

            // Clear the attempt and refresh counters from local storage after max refreshes
            localStorage.removeItem('attempt');
            localStorage.removeItem('refresh');
        }
    } else {
        console.log("class found");

        // Clear the attempt and refresh counters from local storage upon success
        localStorage.removeItem('attempt');
        localStorage.removeItem('refresh');
        
        const labels = Array.from(document.querySelectorAll('label'));
        const inputs = Array.from(document.querySelectorAll('input'));
        const index = labels.findIndex(label => label.textContent.trim().includes("Title"));
        console.log(index);
    }
}

// Initialize the function
check4class();

// now check if localstroage is avalible, if not, use in-memory
// checking if localstorage is avalible

function testlocalstorage {
    try {
        let storagecheck = "test local storage";
        localStorage.setItem(storagecheck, storagecheck);
        localStorage.removeItem(storagecheck);
        return true;
    }
    catch (e) {
        return false;
    }
}

function check4class(attempt = 1) {
    // check if lcoal storage is avalible
    const checklocalstorage = testlocalstorage;
    // confirm if attempt is needed to store in local storage, if not, intialize to in-memory as its recurisve
    let refresh;

    if (checklocalstorage) {
        console.log('local storage avalible, will store refresh');
        refresh = parseInt(localStorage.getItem('refresh') || '0');
        const specificClass = document.querySelector(".col-sm-12");
        if (!specificClass) {
            if (attempt <= 4) {
                console.log(`class not found, will re-try in 10 seconds (attempt ${attempt}/4)`);
                setTimeout(() => {
                    check4class(attempt + 1);
                }, 10000);
            }
            else if (refresh < 3) {
                console.log("Max attempts reached, refreshing the page");
                localStorage.setItem('refresh', refresh + 1);
                location.reload(true); // true forces a server refresh
    
            }
            else {
                console.log("after maxium amount of refreshes, class was not found.")
                localStorage.removeItem('refresh');
            }
        }
        else {
            console.log("class found");

            // Clear the attempt and refresh counters from local storage upon success
            localStorage.removeItem('refresh');
            
            const labels = Array.from(document.querySelectorAll('label'));
            const inputs = Array.from(document.querySelectorAll('input'));
            const index = labels.findIndex(label => label.textContent.trim().includes("Title"));
            console.log(index);
        }
    }
    else {
        console.log("local storage not avalible, will need to manually refresh after set timeout is complete");
        refresh = 0;
        if (!specificClass) {
            if (attempt <= 4) {
                console.log(`class not found, will re-try in 10 seconds (attempt ${attempt}/4)`);
                setTimeout(() => {
                    check4class(attempt + 1);
                }, 10000);
            }
            else {
                console.log("class was not found. please refresh the page manually")
            }
        }
        else {
            console.log("class found");
            const labels = Array.from(document.querySelectorAll('label'));
            const inputs = Array.from(document.querySelectorAll('input'));
            const index = labels.findIndex(label => label.textContent.trim().includes("Title"));
            console.log(index);
        }

    }





// i can build on this to eventually copy the values of the labels to the clipboard
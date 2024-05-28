let values = ["true", "false", "true", "false"];
let count = 0;
values.forEach((value) => {
     if (value === "true") {
         count++;
     }
});

console.log(count);
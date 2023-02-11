let age = prompt("How old are you?");


if (age < 18) {
    let counter = 18-age;
    msg = "You are left with " + counter + " years to drive."
    console.log(msg);
} else if (age >= 18) {
    msg = "You are old enough to drive."
    console.log(msg);
}

// Date
let date = new Date();
console.log("Date: " + date.getDate());
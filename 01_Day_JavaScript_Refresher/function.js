function printFullName() {
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName())

function square(number) {
    return number**2
}
console.log(square(5))

// Unlimited number of arguments
function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }
console.log(`Unlimited number of args: ${sumAllNums(1, 2, 3, 4)}`) // 10

// arrow function
const sumAllNums2 = (...args) => {
    let sum = 0
    for (let i=0; i<args.length; i++) {
        sum += args[i]
    }
    return sum
}
console.log(`Unlimited num of args arrow function: ${sumAllNums2(1, 2, 3, 4)}`)


// Expression function
const square_exp = function(number) {
    return number**2
}
console.log(`Square expression function: ${square_exp(5)}`)

// Self invoking functions are anonymous functions which do not need to be called to return a value.
;(function(n){
    console.log(n**2)
})(5)

let squarenum = (function(number) {
    return number**2
})(5)
console.log(squarenum);

// Arrow functions
squarenum = (number) => {
    return number**2
}
console.log(squarenum(5));

// Higher order functions
const callback = (number) => {
    return number**2
}
function cube(callback, number) {
    return callback(number)*number
}
console.log(cube(callback,2));

// setInterval
function callback2() {
    console.log("Interval Hello!");
}
// setInterval(callback2, 2000); // print every 2 seconds

// setTimeout
setTimeout(callback2, 2000); // print after it waits for 2 seconds)

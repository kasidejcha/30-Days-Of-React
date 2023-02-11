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

// Self invoking function
;(function(n){
    console.log(n**2)
})(5)


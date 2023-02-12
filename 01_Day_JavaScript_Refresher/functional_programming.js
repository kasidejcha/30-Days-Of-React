const countries = ['Finland', 'Estonia', 'Sweden', 'Norway']

// forEach function
console.log(`Countries: ${countries.join(', ')}`)
countries.forEach(function (country, index, arr) {
  console.log(index, country.toUpperCase())
})

// mapping
const uppercountries = countries.map(function (country, index, arr) {
    return countries[index].toUpperCase()
})
console.log(uppercountries)


// filtering
const countriesWithLand = countries.filter(
    (country) => country.includes('land')
) // function returns boolean
console.log(countriesWithLand) // ["Finland", "Iceland"]

// reduce 
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = nums.reduce((acc, cur) => acc + cur, 5)
console.log(sum) // 60

const strs = ['Hello', 'world', '!']
const helloWorld = strs.reduce((acc, cur) => acc + ' ' + cur)
console.log(helloWorld) // "Hello world !"

// find
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const firstEvenNum = numbers.find((n) => n % 2 === 0 && n > 0)
const firstOddNum = numbers.find((n) => n % 2 !== 0)
console.log(firstEvenNum) // 2
console.log(firstOddNum) // 1

// find index
const numbers_in = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const firstEvenNum_in = numbers_in.findIndex((n) => n % 2 === 0 && n > 0)
const firstOddNum_in = numbers_in.findIndex((n) => n % 2 !== 0)
console.log(firstEvenNum_in) // 2
console.log(firstOddNum_in) // 1

// some: The some method is used with array and return a boolean. 
// If one or some of the items satisfy the criteria the result will be true else it will be false.
const num_some = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const someAreEvens = numbers.some((n) => n % 2 === 0 && n > 0)
const someAreOdds = numbers.some((n) => n % 2 !== 0)
console.log(someAreEvens) // true
console.log(someAreOdds) // true

// every: The method every is somehow similar to some but every item must satisfy the criteria.
const num_every = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const everyAreEvens = numbers.every((n) => n % 2 === 0 && n > 0)
const everyAreOdds = numbers.every((n) => n % 2!== 0)
console.log(everyAreEvens) // false
console.log(everyAreOdds) // false

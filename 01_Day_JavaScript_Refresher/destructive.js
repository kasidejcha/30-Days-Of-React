const numbers = [1, 2, 3]
const countries = ['Finland', 'Sweden', 'Norway']

for (const number of numbers) {
    console.log(number)
}

for (const country of countries) {
    console.log(country)
}

const nums = [1, 2, 3, 4, 5]
const [num1, num2, num3, ...rest] = nums
console.log(num1, num2, num3, rest) //1, 2, 3, [4, 5, 6, 7, 8, 9, 10]

const [x, y] = [2, (value) => value ** 2]
console.log(x, y(x)) //2, 4

// objects
const rectangle = {
    width: 20,
    height: 10,
  }
  
let { width, height, perimeter = 200 } = rectangle
console.log(width, height, perimeter) // 20, 10, undefined

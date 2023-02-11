const person = {
    firstName: 'Asabeneh',
    lastName: 'Mahdi',
    age: 25,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki',
    },
    getPersonInfo: function () {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    },
    getFullname: function () {
        return `${this.firstName} ${this.lastName}`
    }
  }

console.log(person.getFullname())

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person)
console.log(copyPerson)


const keys = Object.keys(copyPerson.address)
console.log(keys)

const values = Object.values(copyPerson.address)
console.log(values)

// entries is a list of objects
const entries = Object.entries(copyPerson.address)
console.log(entries)
console.log(entries[2])

// Check if a property exists in an object (property is a key in an object)
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('age'))
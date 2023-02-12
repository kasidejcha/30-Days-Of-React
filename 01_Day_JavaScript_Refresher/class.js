class Person {
    constructor(firstName, lastName, age) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
    }
    getFullName() {
        const fullName = `${this.firstName} ${this.lastName}`
        return fullName
    }
    get getAge() {
        return this.age
    }
    set setAge(age) {
        this.age += age
    }
  }
  
const person = new Person('bas', 'kasidej', 26)

console.log(person)
console.log(person.firstName)
console.log(person.getFullName())
console.log(person.getAge)

person.setAge = 4
console.log(person.age)


// Inheritance
class Student extends Person {
    saySomething() {
        console.log('I am a child of the person class')
}
}

const s1 = new Student('Asabeneh', 'Yetayeh', 30)
console.log(s1)
console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getAge)
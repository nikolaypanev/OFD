const a = 4
const b = 5

console.log(4+5)

console.log("This was the result")

x = 10

if (x < 10) {
    console.log("x is smaller than 10")
} else if (x > 10) {
    console.log("x is greater than 10") 
} else {
    console.log("x is 10")
}

function Person(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(birthday);
}

const person1 = new Person('John', 'Doe', '3-4-1980');

console.log(person1.birthday)
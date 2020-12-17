// Object literal
const book1 = {
    title: 'Book 1',
    author: 'John Doe',
    year: '2020',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Get the formatted summary by calling the inner function
console.log(book1.getSummary())

// Get all object values for the given parameter
console.log(Object.values(book1))

// Get all object attributes 
console.log(Object.keys(book1))
// Object constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}


// getSummary as prototype function
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author}
    in ${this.year}`;
}

Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`
};


// Revise/change the year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true // this property is added to the object
}


const book1 = new Book('Book One', 'John Doe', '2012');
const book2 = new Book('Book Two', 'Jane Doe', '2015');

console.log(book1.title);
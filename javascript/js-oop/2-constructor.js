// Object constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    // Function for all objects
    this.getSummary = function() {
        return `${this.title} was written by ${this.author}
        in ${this.year}`;
    }
}


const book1 = new Book('Book One', 'John Doe', '2012');
const book2 = new Book('Book Two', 'Jane Doe', '2015');

console.log(book1.title);
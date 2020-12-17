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

function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

// Inherit prototype methods; must be before the actual instantiation
Magazine.prototype = Object.create(Book.prototype);

// Instantiate magazine
const mag1 = new Magazine('Mag One', 'Jon Snow', '2018', 'Jan');

// Use magazine constructor 

Magazine.prototype.constructor = Magazine;
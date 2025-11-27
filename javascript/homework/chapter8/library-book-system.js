function Book(title, author, isbn, pages) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.pages = pages;
    this.isAvailable = true;
}

Book.prototype.getInfo = function() {
    console.log(`${this.title} by ${this.author}, ISBN: ${this.isbn}, Pages: ${this.pages}, Available: ${this.isAvailable}`);
}

Book.prototype.checkOut = function() {
    this.isAvailable = false;
    console.log('This book is not currently available.');
}

Book.prototype.returnBook = function() {
    this.isAvailable = true;
    console.log('This book is available');
}

let book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565', 180);
book1.getInfo();
book1.checkOut();
book1.getInfo();
book1.returnBook();
book1.getInfo();

let book2 = new Book('1984', 'George Orwell', '9780451524935', 328);
book2.getInfo();
book2.checkOut();
book2.getInfo();
book2.returnBook();
book2.getInfo();
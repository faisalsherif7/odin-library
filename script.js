const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

function addBookToLibrary(title, author, pages, read) {
    // create a new instance of the Book object and add the data obtained from the form as its property values
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    return;
  }

const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
const read = document.querySelector('#read')

addEventListener('submit', (event) => {
    
    // Prevent form from submitting to server
    event.preventDefault();

    // Get all data from form and pass it on to addbooktolibrary so that it can then add the book
    addBookToLibrary(title, author, pages, read)

    console.log(myLibrary);
})


const booksTable = document.querySelector('.books-table')

function Display() {
    myLibrary.forEach((book) => {
        booksTable.textContent += book;
    })
}
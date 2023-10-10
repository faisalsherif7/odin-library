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
    return myLibrary.push(book);
  }

const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
const read = document.querySelector('#read')

addEventListener('submit', (event) => {
    
    // Prevent form from submitting to server
    event.preventDefault();

    // Get all data from form and pass it on to addBookToLibrary() function so that it can then add the book
    addBookToLibrary(title.value, author.value, pages.value, read.value)

    // Display new books
    Display();
})


function Display() {
    const booksTable = document.querySelector('tbody')
    booksTable.textContent = '';
    myLibrary.forEach((book) => {

        let newRow = booksTable.insertRow(-1);
    
        let title = newRow.insertCell(0);
        title.textContent += book.title;

        let author = newRow.insertCell(1);
        author.textContent += book.author;

        let pages = newRow.insertCell(2);
        pages.textContent += book.pages;

        let read = newRow.insertCell(3);
        read.textContent += book.read;
    })
}
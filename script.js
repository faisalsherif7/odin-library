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
const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    
    // Prevent form from submitting to server
    event.preventDefault();

    // Access checked radio button 
    let checkedRadio;
    let radioButtons = document.querySelectorAll('input[name="read"]');
    for (button of radioButtons) {
      if (button.checked) {
        checkedRadio = button;
      }
    }

    // Pass on values from the form to the function that adds it to the array
    addBookToLibrary(title.value, author.value, pages.value, checkedRadio.value)

    // Close dialog and update table
    dialog.close();
    form.reset()
    Display();
})


function Display() {
    const booksTable = document.querySelector('tbody')
    booksTable.textContent = '';

    indexCounter = -1;

    myLibrary.forEach((book) => {

        indexCounter += 1;

        let newRow = booksTable.insertRow(-1);
    
        let title = newRow.insertCell(0);
        title.textContent += book.title;

        let author = newRow.insertCell(1);
        author.textContent += book.author;

        let pages = newRow.insertCell(2);
        pages.textContent += book.pages;

        let read = newRow.insertCell(3);
        read.textContent += book.read;

        let index = newRow.insertCell(4);
        index.innerHTML += `<button type="button" class="delete-entry" value="${indexCounter}"> Delete Book </button>`
        index.innerHTML += `<button type="button" class="change-read-status" value="${indexCounter}"> Change Read Status </button>`

        // Create event listener for delete button to delete entry
        const deleteButton = document.querySelector(`button[value="${indexCounter}"][class="delete-entry"]`)
        deleteButton.addEventListener('click', function () {
          deleteEntry(deleteButton);
        })
    })
}

// Function to delete entry
function deleteEntry(button) {
  let index = button.value;
  myLibrary.splice(index, 1);
  console.log(index);
  Display();
}


const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".header button");
const closeButton = document.querySelector(".close");

// Open dialog
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// Close dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});



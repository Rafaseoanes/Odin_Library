const cardContainer = document.getElementById("mainContainer");

const userInputDialog = document.getElementById("modal");
const addBookModal = document.getElementById("addBookModal");
const closeModalButton = document.getElementById("closeModalButton");
const addBook = document.getElementById("addBook");

//form inputs:

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");

const myLibrary = [
  {
    title: "The little prince",
    author: "Antoine de Saint-Exupéry",
    pages: 96,
    read: true,
  },
  {
    title: "IT",
    author: "Stephen King",
    pages: 1504,
    read: false,
  },
  {
    title: "How to Catch a Dinosaur",
    author: "Adam Wallace",
    pages: 40,
    read: false,
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  
}

function displayBooks(library) {
  cardContainer.innerHTML = "";
  library.forEach((book) => {
    const carDiv = document.createElement("div");
    carDiv.classList.add("card");
    cardContainer.appendChild(carDiv);

    const title = document.createElement("h3");
    title.innerText = book.title;
    carDiv.appendChild(title);

    const author = document.createElement("p");
    author.innerText = `By: ${book.author}`;
    carDiv.appendChild(author);

    const pages = document.createElement("p");
    pages.innerText = `Pages: ${book.pages}`;
    carDiv.appendChild(pages);

    const read = document.createElement("p");
    if (book.read) {
      read.innerText = "Read?: ✅";
    } else {
      read.innerText = "Read?: ⛔";
    }
    carDiv.appendChild(read);
  });
}

displayBooks(myLibrary);

addBookModal.addEventListener("click", () => {
  userInputDialog.showModal();
});

closeModalButton.addEventListener("click", () => {
  userInputDialog.close();
});

addBook.addEventListener("click", (event) => {
  event.preventDefault();

  const newBook = new Book(title.value, author.value, pages.value, read.value);
  addBookToLibrary(newBook);
  displayBooks(myLibrary);

  console.log(newBook);
//   console.log(myLibrary);
  userInputDialog.close();
});

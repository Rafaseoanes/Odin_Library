const cardContainer = document.getElementById("mainContainer");

const userInputDialog = document.getElementById("modal");
const openForm = document.getElementById("openForm");
const closeModalButton = document.getElementById("closeModalButton");
const addBook = document.getElementById("addBook");

//form inputs:

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");

let myLibrary = [
  {
    title: "The little prince",
    author: "Antoine de Saint-Exupéry",
    pages: 96,
    read: true,
    id: 0,
    toggleReadStatus: function () {
      this.read = !this.read;
    },
  },
  {
    title: "IT",
    author: "Stephen King",
    pages: 1504,
    read: false,
    id: 1,
    toggleReadStatus: function () {
      this.read = !this.read;
    },
  },
  {
    title: "How to Catch a Dinosaur",
    author: "Adam Wallace",
    pages: 40,
    read: false,
    id: 2,
    toggleReadStatus: function () {
      this.read = !this.read;
    },
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.toggleReadStatus = function () {
    this.read = !this.read;
  };
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

function displayBooks(book) {
  const carDiv = document.createElement("div");
  carDiv.classList.add("card");
  cardContainer.appendChild(carDiv);

  const title = document.createElement("h3");
  title.innerText = book.title;

  const author = document.createElement("p");
  author.innerText = `By: ${book.author}`;

  const pages = document.createElement("p");
  pages.innerText = `Pages: ${book.pages}`;

  const read = document.createElement("p");

  if (book.read) {
    read.innerText = "Read?: ✅";
  } else {
    read.innerText = "Read?: ⛔";
  }

  const changeReadStatusButton = document.createElement("button");
  changeReadStatusButton.classList.add("changeReadStatusButton");
  changeReadStatusButton.innerText = "Change status";

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.innerText = "Delete";

  changeReadStatusButton.addEventListener("click", () => {
    book.toggleReadStatus();

    if (book.read) {
      read.innerText = "Read?: ✅";
    } else {
      read.innerText = "Read?: ⛔";
    }

    console.log(book);
  });

  deleteButton.addEventListener("click", (e) => {
    myLibrary = myLibrary.filter((currentBook) => {
      return currentBook.id !== book.id;
    });
    e.target.parentElement.remove();
  });

  carDiv.append(
    title,
    author,
    pages,
    read,
    deleteButton,
    changeReadStatusButton
  );
}

openForm.addEventListener("click", () => {
  userInputDialog.showModal();
});

closeModalButton.addEventListener("click", () => {
  userInputDialog.close();
});

addBook.addEventListener("click", (event) => {
  const newBook = new Book(
    title.value,
    author.value,
    pages.value,
    read.checked
  );

  newBook.id = myLibrary.length;

  addBookToLibrary(newBook);
  displayBooks(myLibrary[newBook.id]);

  console.log(myLibrary);

  userInputDialog.close();
  event.preventDefault();
});

function showPlaceholders(myLibrary) {
  myLibrary.forEach((element) => displayBooks(element));
}
showPlaceholders(myLibrary);
console.log(myLibrary);

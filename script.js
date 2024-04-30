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

function addBookToLibrary() {
  // do stuff here
}

function displayBooks(library) {
  library.forEach((book) => {
    console.log(`${book.author}`);
  });
}

displayBooks(myLibrary);

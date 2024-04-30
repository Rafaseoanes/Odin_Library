const cardContainer = document.getElementById("mainContainer");

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
      read.innerText = "Readed?: ✅";
    } else {
      read.innerText = "Readed?: ⛔";
    }
    // read.innerText = book.read
    carDiv.appendChild(read);

    console.log(`${book.author}`);
  });
}

displayBooks(myLibrary);

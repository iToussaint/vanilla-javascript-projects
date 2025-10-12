const table = document.querySelector("table");
const rows = table.querySelector("tbody");
const form = document.querySelector("form");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookISBN = document.getElementById("isbn");
const addMessage = document.getElementById("add-message");
const deleteMessage = document.getElementById("delete-message");
const emptyFieldsMessage = document.getElementById("empty-fields-message");
const alreadyExistMessage = document.getElementById("already-exist-message");
let books = new Array();

console.log(table.querySelector("tbody"));

console.log("hey   " + localStorage.hey);

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  static createRow(book) {
    const newRow = rows.insertRow();
    const cellTitle = newRow.insertCell();
    cellTitle.classList.add("p-3");
    cellTitle.textContent = book.title;
    const cellAuthor = newRow.insertCell();
    cellAuthor.textContent = book.author;
    const cellISBN = newRow.insertCell();
    cellISBN.textContent = book.isbn;
    const cellBtn = newRow.insertCell();

    cellBtn.innerHTML =
      "<button class='bg-red-500 rounded-sm text-slate-50 size-6 cursor-pointer'>X</button>";
  }

  static table(books) {
    rows.innerHTML = "";
    books.forEach((book) => {
      this.createRow(book);
    });
  }
}

document.onload = UI.table(JSON.parse(localStorage.books));

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (localStorage.books === undefined) books = [];
  else books = JSON.parse(localStorage.books);

  if (books.some((book) => book.isbn === bookISBN.value)) {
    alreadyExistMessage.classList.remove("hidden");
    setTimeout(() => {
      alreadyExistMessage.classList.add("hidden");
    }, 2000);
  } else if (
    bookTitle.value.trim() === "" ||
    bookAuthor.value.trim() === "" ||
    bookISBN.value.trim() === ""
  ) {
    emptyFieldsMessage.classList.remove("hidden");
    setTimeout(() => {
      emptyFieldsMessage.classList.add("hidden");
    }, 2000);
  } else {
    books.push(new Book(bookTitle.value, bookAuthor.value, bookISBN.value));
    localStorage.setItem("books", JSON.stringify(books));
    addMessage.classList.remove("hidden");
    UI.table(books);
    setTimeout(() => {
      addMessage.classList.add("hidden");
    }, 2000);
  }
});

table.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    books = JSON.parse(localStorage.books);
    books = books.filter(
      (book) =>
        book.isbn !==
        event.target.parentElement.previousElementSibling.textContent
    );
    localStorage.setItem("books", JSON.stringify(books));
    UI.table(books);
  }
});

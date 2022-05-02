class BookList {
  constructor(root, library = []) {
    this.library = library;
    this.root = root;
  }
  add(name, author, isbn) {
    let book = new Book(name, author, isbn);
    this.library.push(book);
    this.createUI();
  }
  delete(id) {
    let index = this.library.findIndex((book) => book.id === id);
    this.library.splice(index, 1);
    this.createUI();
  }
  createUI() {
    this.root.innerHTML = "";
    this.library.forEach((book) => {
      let ui = book.createUI();
      ui.querySelector(".delete").addEventListener(
        "click",
        this.delete.bind(this, book.id)
      );
      this.root.append(ui);
    });
  }
}

class Book {
  constructor(name, author, isbn) {
    this.name = name;
    this.author = author;
    this.isbn = isbn;
    this.id = Date.now();
  }

  createUI() {
    let tr = document.createElement("tr");
    let name = document.createElement("td");
    name.innerText = this.name;
    let author = document.createElement("td");
    author.innerText = this.author;
    let isbn = document.createElement("td");
    isbn.innerText = this.isbn;
    let td = document.createElement("td");
    td.innerText = "❌";
    td.setAttribute("class", "delete");
    tr.append(name, author, isbn, td);
    return tr;
  }
}

let lib = new BookList(document.querySelector("tbody"));

function handleSubmit(e) {
  e.preventDefault();
  let bookName = e.target.elements.name.value;
  let author = e.target.elements.author.value;
  let isbn = e.target.elements.isbn.value;
  lib.add(bookName, author, isbn);
  e.target.reset();
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

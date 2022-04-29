## An object-oriented book-list!

- [ ] Create a class BookList
- [ ] Create another class called Book

#### Each Book should have several properties:

1. Title
2. Category
3. Author
4. isRead (default to `false`)
5. finishedDate

Book class will have the following methods:

- `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.

```js
class Book {
  constructor(title, category, author, isRead = false, finishedDate) {
    this.title = title;
    this.category = category;
    this.author = author;
    this.isRead = isRead;
    this.finishedDate = finishedDate;
  }
  markBookAsRead() {
    this.isRead = true;
    this.finishedDate = Date.now();
  }
}
```

#### BookList should have the following properties:

1. An array of all the Books
2. Current read book index

#### BookList Methods

- [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
- [] `getCurrentBook()` should return the current book using the `index` and the book array
- [] `getNextBook()` should return the next book using the `index` and the book array
- [] `getPrevBook()` should return the previous book using the `index` and the book array
- [] `changeCurrentBook` should accept one parameter and update the current index.

```js
class BookList {
  constructor(arr, index) {
    this.arr = arr;
    this.index = index;
  }
  add(newBooks) {
    this.arr = [...this.arr, ...newBooks];
  }
  getCurrentBook() {
    console.log(this.arr[this.index]);
    return this.arr;
  }
  getNextBook() {
    if (this.index + 1 > this.arr.length - 1) {
      return this.arr[0];
    }
    return this.arr[this.index + 1];
  }
  getPrevBook() {
    if (this.index - 1 === -1) {
      return this.arr[this.arr.length - 1];
    }
    return this.arr[this.index - 1];
  }
  changeCurrentBook(newIndex) {
    this.index = newIndex;
  }
}
```

After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.

```js
let book1 = new Book("book1", "category1", "author1");
book1.markBookAsRead();
let book2 = new Book("book2", "category2", "author2");
let book3 = new Book("book3", "category3", "author3");
book3.markBookAsRead();
let book4 = new Book("book4", "category4", "author4");
let book5 = new Book("book5", "category5", "author5");

let bookList = [book1, book2, book3, book4, book5];
let list = new BookList(bookList, 3);

list.getCurrentBook();
list.getNextBook();
list.getPrevBook();
list.changeCurrentBook(4);

let book6 = new Book("book6", "category6", "author6");
list.add([book6]);
list.getCurrentBook();
```

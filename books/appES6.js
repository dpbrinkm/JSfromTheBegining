class Book{
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI{
  addBookToList(book){
     //add book to list
     const list = document.getElementById('book-list');
     //create element
     const row = document.createElement('tr');
     // insert cols
     row.innerHTML = ` <td>${book.title}</td>
     <td>${book.author}</td>
     <td>${book.isbn}</td>
     <td><a href ="#" class = "delete>X</a></td>`;
 }

  showAlert(message, className){
  // create div
  const div =document.createElement('div');
  //add class
  div.className =`alert ${className}`;
  //Add text mesg
  div.appendChild(document.createTextNode(message));
  // get parent
  const container = document.querySelector('.container');
  //get form 
  const form = document.querySelector('#book-form');
  //inster form
  container.insertBefore(div, form);

  //time out
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000)
  }
  deleteBook(target){
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove();
    }
  }
  clearFields(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
  }
}

//local storage class
class Store{
  static getBooks(){
    let books;
    if(localStorage.getItem('books') === null){
      book = [];
    } else{
      books = JSON.parse(localStorage.getItem('books'));
    }
  }
  static displayBooks(){
    const books = Store.getBooks();
    books.forEach(function(book){
      const ui = new UI;

      //add book to UI
      ui.addBookToList(book);
    });
  }
  static addBook(book){
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }
  static removeBook(isbn){
    const books = Store.getBooks();
    books.forEach(function(book, index){
      if(book.isbn === isbn){
        books.splice(index, 1);
      }
    });
  }
}

//DOMLoad event 
document.addEventListener('DOMContentLoaded', Store.displayBooks);

//event listeners for add book 
document.getElementById('book-form').addEventListener('submit', function(e){
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

//instanciate book, create new instance of a book
const book = new Book (title, author, isbn);
  
//instanciate ui object
const ui = new UI();

//validate
if(title ===''||author===''||isbn===''){
  ui.showAlert('Please fill in all feilds', 'error');
}else{

// add book to list
ui.addBookToList(book);

  //add to local 
  Store.addBook(book);

  //show suscess
  ui.showAlert('Book Added!', 'sucsess');
  
  // clear feilds
  ui.clearFeilds();
}
 e.preventDefault();

});

// event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

  //instanciate UI
  const ui = new UI();

  //delete book 
  ui.deleteBook(e.target);

  //remove from local storage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  //show alert
  ui.showAlert('Book removed', 'success');

  e.preventDefault();
});
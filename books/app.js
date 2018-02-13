//Book Constructor
function book(title, author, isbn){
  this.title = title;
  this.author =author;
  this.isbn =isbn;
}
//UI constructor
function UI(){}

// add book to list
UI.prototype.addBookToList = function(book){
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
//show alert
UI.prototype.showAlert = function(message, className){
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
//delete book
UI.prototype.deleteBook = function(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
  }
}
//clear for boxes after submit
UI.prototype.clearFeilds = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}


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
  ui.showAlert('Please fill in all feilds', 'error')
}else{

// add book to list
ui.addBookToList(book);
  //show suscess
  ui.showAlert('Book Added!', 'sucsess');
  
  // clear feilds
  ui.clearFeilds();
}
 e.preventDefault();

});

// event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

});
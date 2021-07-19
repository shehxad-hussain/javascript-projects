class Book {
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list =  document.getElementById('book-list');

        //Create  tr Element
        const row =  document.createElement('tr');
     
        //Insert cols
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = "#" class = "delete">X<a></td>
        
        `;
     
        list.appendChild(row);

    }

    showAlert(message,className) {
         //create div
    const div = document.createElement('div');
    //add classes
    div.className = `alert ${className}`;
    //add  text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector('.container');
    //get form
    const form = document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div, form);
    //timeout  after 3 sec
    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);

    }

    deleteBook(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
           } 

    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

//Event listners for Added book
document.querySelector('#book-form').addEventListener('submit', function(e) {

    //get form values
    const title = document.querySelectorAll('#title').value;
    console.log(title);
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
          

    //Insttansiate  book
     const book = new Book(title,author,isbn)

    //Insttansiate  UI
    const ui = new UI();

    //validate
    if(title === '' || author === '' || isbn === '') {
    //Error Alert
       ui.showAlert('Pleaase fill  in all fields', 'error')
    }else{
     //Add  book to list

    ui.addBookToList(book);

    //show success 
    ui.showAlert('Book Added!', 'success');

    //Clear Fields

    ui.clearFields();

    }


          e.preventDefault()
})

//Event  Listner for delete

document.getElementById('book-list').addEventListener('click', function(e) {
    
    //Insttansiate  UI
    const ui = new UI();

    //delete book
    ui.deleteBook(e.target);

    //show message
    ui.showAlert('Book Removed', 'success')
    e.preventDefault();
})



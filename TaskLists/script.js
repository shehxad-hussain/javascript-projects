//Define UI Var
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//Load All event listners

loadEventListeners();

//load all event listeners

function  loadEventListeners() {
    //DOM LOad event
    document.addEventListener('DOMContentLoaded', getTasks)

    //add task event
    form.addEventListener('submit', addTask);

    //remove task event

    taskList.addEventListener('click', removeTask);

      //Clear task event

    clearBtn.addEventListener('click', clearTasks);

    //filters task event

    filter.addEventListener('keyup', filterTasks);
}

//Get Tasks  From LS

function getTasks() {
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
      //create li element

        const li = document.createElement('li');
        //add class

        li.className = 'collection-item';

        //create text node and append to li
        li.appendChild(document.createTextNode(task));

        //creat new link element
        const link = document.createElement('a');
        //add class
        link.className = 'delete-item secondary-content';
        // add icon html

        link.innerHTML = '<i class="fa fa-remove"></i>';
        //append the link to li
        li.appendChild(link);

        //append li to ul

        taskList.appendChild(li);

    });
    
}

//add task

function addTask(e) {
 if(taskInput.value === '') {
     alert('add a task');
 }

 //create li element

 const li = document.createElement('li');
 //add class

 li.className = 'collection-item';

 //create text node and append to li
 li.appendChild(document.createTextNode(taskInput.value));

 //creat new link element
 const link = document.createElement('a');
 //add class
 link.className = 'delete-item secondary-content';
 // add icon html

 link.innerHTML = '<i class="fa fa-remove"></i>';
 //append the link to li
 li.appendChild(link);

 //append li to ul

 taskList.appendChild(li);

  //Store in LS

storeInLocalstorage(taskInput.value);


 //clear input

 taskInput.value = '';

    e.preventDefault();
}

function storeInLocalstorage(task) {
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are You Sure?')) {
        e.target.parentElement.parentElement.remove();

        //Remove From LS
        
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);

        }
    }
} 

  //Remove From LS

  function removeTaskFromLocalStorage(taskItem) {
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index) {
        if(taskItem.textContent === task) {
 
            tasks.splice(index, 1)
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }


function clearTasks() {
    // taskList.innerHTML = '';

    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    //Clear FRom Ls

    clearTasksFromLocalStorage();
}

//Clear FRom Ls

function clearTasksFromLocalStorage() {
    localStorage.clear();
}

function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach
    (function(task) {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    })
}
import _ from 'lodash';
import './style.css';

const task = [
{
  index:[0],
  description: 'Do Laundry',
  completed: false
},
{
  index:[1],
  description: 'Visit Mum',
  completed: false
},
{
  index:[2],
  description: 'Practice JavaScript',
  completed: false
}
];

 const todoList = () => {
    const todos = document.querySelector('.todo-list');
   for(let i=0; i<=task.length; i++){
      todos.innerHTML += `
      <li class="todo">
        <span>
        <input class="box" type="checkbox" />
        <input type="text" value="${task[i].description}" />
        </span>
        <i class='bx bx-dots-vertical-rounded'></i>
      </li>
      <hr>
      `;
    };
  };
  
  todoList();





















  // const todoList = [
  //   {
  //     id: 1,
  //     description: 'Take out the trash',
  //     completed: false,
  //   },
  //   {
  //     id: 1,
  //     description: 'Talk to some friends',
  //     completed: false,
  //   },
  //   {
  //     id: 1,
  //     description: 'Clean the house',
  //     completed: false,
  //   },
  // ];
  
  // const renderTodoList = () => {
  //   const todoContainer = document.querySelector('.container');
  //   todoList.forEach((todo) => {
  //     todoContainer.innerHTML += `
  //     <div class="todo border-bottom flex">
  //       <input class="box" type="checkbox" />
  //       <input type="text" value="${todo.description}" />
  //       <i class='bx bx-dots-vertical-rounded'></i>
  //     </div>
  //     `;
  //   });
  // };
  
  // renderTodoList();


// function getTask (task){
//   const element = document.getElementById('container');
//   element.innerHTML = `
//   <p>${Description}</p>
//   <p>${Completed}</p>
// ` 
// }
//  getTask(task);

// class Task {
//   constructor(index, description, completed) {
//     this.index = index;
//     this.description = description;
//     this.completed = completed;
//   }
// }

// function Task (index, description, completed){

//   this.index = index;
//   this.description= description;
//   this.completed = completed;
// }

// const toDo = [];




// const toDo = [
//   {
//     index:
//     description:
//     completed:

//   }
// ]


// function component() {
//   const element = document.createElement('div');

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

// document.body.appendChild(component());
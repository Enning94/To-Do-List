// import _ from 'lodash';
import './style.css';

const task = [
  {
    index: [0],
    description: 'Do Laundry',
    completed: false,
  },
  {
    index: [1],
    description: 'Visit Mum',
    completed: false,
  },
  {
    index: [2],
    description: 'Practice JavaScript',
    completed: false,
  },
];

const todoList = () => {
  const todos = document.querySelector('.todo-list');
  task.forEach((task) => {
    todos.innerHTML += `
      <li class="todo">
        <span>
        <input class="box" type="checkbox" />
        <input type="text" value="${task.description}" />
        </span>
        <i class='bx bx-dots-vertical-rounded'></i>
      </li>
      <hr>
      `;
  });
};

todoList();
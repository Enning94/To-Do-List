
const todoList = document.querySelector(".todo-list");

export const getTodos = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const completedBtn = document.createElement("div");
    completedBtn.innerHTML = '<input type="checkbox" class = "complete-btn" >';
    todoDiv.appendChild(completedBtn);

    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerHTML = `<input type="text" value = "${todo.description}" class ="inp">`;
    todoDiv.appendChild(newTodo);

    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = '<i class="bx bx-trash"></i>';
    trashBtn.classList.add("trash-btn");
    todoDiv.appendChild(trashBtn);
    todoList.appendChild(todoDiv);
  });
}
import { removeLocalTodos } from "./localStorage.js";

export const deleteTodo = (e)=>{
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    removeLocalTodos(todo);
    todo.remove();
  }
}

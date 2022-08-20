import { editLocalTodos } from "./localStorage.js";
export const editTodo = (e)=>{
  const item = e.target;
  if (item.classList[0] === "inp") {
    const todo = item.parentElement;
    editLocalTodos(todo);
  }
}

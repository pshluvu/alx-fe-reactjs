import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import "./TodoList.css"; // Optional: For .completed styling

function TodoList() {
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false },
    { text: "Build Todo App", completed: false },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleTodo(index)}
            className={todo.completed ? "completed" : ""}
          >
            {todo.text}{" "}
            <button data-testid={`delete-${index}`} onClick={(e) => {
              e.stopPropagation(); // Prevent toggling when clicking delete
              deleteTodo(index);
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;


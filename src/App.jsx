import "./App.css";
import { useState } from "react";

function App() {
  const [newItem, setewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(event) {}

  return (
    <>
      <h1>To do list</h1>
      <form className="input-form">
        <label htmlFor="item">Add a task</label>
        <input type="text" id="item" />
        <button>Add task</button>
      </form>
      <h2 className="task-list-heading">Tasks</h2>
      <input type="checkbox" name="Item 1" id="item-1" />
      <label htmlFor="item-1">Task 1</label>
      <button className="btn delete-btn">Delete</button>
    </>
  );
}

export default App;

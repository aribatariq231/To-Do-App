import { useState } from "react";

function TodoForm({ addTodo, theme }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form className={`todo-form ${theme}`} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done? 📝"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;
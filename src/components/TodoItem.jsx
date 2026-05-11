import { useState } from "react";
import { FaTrash, FaEdit, FaSave, FaTimes } from "react-icons/fa";

function TodoItem({ todo, deleteTodo, toggleTodo, editTodo, theme }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      editTodo(todo.id, editText);
      setIsEditing(false);
    } else {
      setIsEditing(true);
      setEditText(todo.text);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEdit();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  return (
    <div className={`todo-item ${theme} ${todo.completed ? "completed-item" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          className="edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyPress}
          autoFocus
        />
      ) : (
        <span
          className={todo.completed ? "completed" : ""}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </span>
      )}

      <div className="todo-actions">
        {isEditing ? (
          <>
            <button onClick={handleEdit} className="save-btn" title="Save">
              <FaSave />
            </button>
            <button onClick={handleCancel} className="cancel-btn" title="Cancel">
              <FaTimes />
            </button>
          </>
        ) : (
          <>
            <button onClick={handleEdit} className="edit-btn" title="Edit">
              <FaEdit />
            </button>
            <button onClick={() => deleteTodo(todo.id)} className="delete-btn" title="Delete">
              <FaTrash />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
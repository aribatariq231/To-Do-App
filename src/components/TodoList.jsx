import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleTodo, editTodo, theme }) {
  return (
    <div className={`todo-list ${theme}`}>
      {todos.length === 0 ? (
        <div className="empty-state">
          <div style={{ fontSize: "50px", marginBottom: "10px" }}>🎯</div>
          <p style={{ margin: 0 }}>No tasks yet! Add one above ✨</p>
        </div>
      ) : (
        <>
          <div className="stats">
            <span>Total: {todos.length}</span>
            <span>Completed: {todos.filter(t => t.completed).length}</span>
            <span>Pending: {todos.filter(t => !t.completed).length}</span>
          </div>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
              theme={theme}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default TodoList;
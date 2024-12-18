"use client";
import { useTodos } from '@/context/TodoContext';

function Item({ item }) {
  const { todos, setTodos } = useTodos();

  const toggleComplete = () => {
    setTodos(todos.map(todo => 
      todo.id === item.id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDelete = () => {
    setTodos(todos.filter(todo => todo.id !== item.id));
  };

  return (
    <li id={item.id} className="todo_item">
      <button className="todo_items_left" onClick={toggleComplete}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          {item.completed ? (
            // Checked circle
            <path 
              fill="#88ab33"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            />
          ) : (
            // Empty circle
            <path 
              fill="#c2b39a"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
            />
          )}
        </svg>
        <p style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
          {item.title}
        </p>
      </button>
      <div className="todo_items_right">
        <button onClick={handleDelete}>
          <span className="visually-hidden">Delete</span>
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
          </svg>
        </button>
      </div>
    </li>
  );
}

function TODOList() {
  const { todos } = useTodos();

  return (
    <ol className="todo_list">
      {todos && todos.length > 0 ? (
        todos.map((item) => <Item key={item.id} item={item} />)
      ) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  );
}

export default TODOList;
"use client";
import { useTodos } from '@/context/TodoContext';
import { v4 as uuidv4 } from 'uuid';

function Form() {
  const { todos, setTodos } = useTodos();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const todoText = formData.get('todo');
    
    if (todoText.trim()) {
      const newTodo = {
        id: uuidv4(),
        title: todoText,
        completed: false
      };
      
      setTodos([...todos, newTodo]);
      event.target.reset();
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Write your next task"
        />
      </label>
      <button type="submit">
        <span className="visually-hidden">Submit</span>
        <svg>
          <path d="" />
        </svg>
      </button>
    </form>
  );
}

export default Form;

"use client";
import { useTodos } from '@/context/TodoContext';

function TODOHero() {
  const { todos } = useTodos();
  const todos_completed = todos.filter(todo => todo.completed).length;
  const total_todos = todos.length;

  return (
    <section className="todohero_section">
      <div>
        <p>Task Done</p>
        <p>Keep it up</p>
      </div>
      <div>
        {todos_completed}/{total_todos}
      </div>
    </section>
  );
}

export default TODOHero;
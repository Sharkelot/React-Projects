"use client";
import Header from '@/components/Header';
import TODOHero from '@/components/TODOHero';
import Form from '@/components/Form';
import TODOList from '@/components/TODOList';
import { TodoProvider } from '@/context/TodoContext';

export default function Home() {
  return (
    <TodoProvider>
      <div className="wrapper">
        <header>
          <Header />
        </header>
        <main>
          <TODOHero />
          <Form />
          <TODOList />
        </main>
      </div>
    </TodoProvider>
  );
}

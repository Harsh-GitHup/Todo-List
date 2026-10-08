import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import AddTodo from './Components/AddTodo';
import About from './Components/About';
import './App.css';

function App() {
  const initTodos = () => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    return storedTodos || [];
  };

  const [todos, setTodos] = useState(initTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    setTodos((prevTodos) => prevTodos.filter((e) => e !== todo));
    toast.success('Task deleted successfully');
  };

  const updateTodo = (sno, newTitle, newDesc) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.sno === sno ? { ...t, title: newTitle, desc: newDesc } : t))
    );
    toast.success('Task updated successfully');
  };

  const addTodo = (title, desc) => {
    const sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
    const myTodo = { sno, title, desc };
    setTodos((prevTodos) => [...prevTodos, myTodo]);
    toast.success('Task added successfully');
  };

  return (
    <Router>
      <Toaster position="top-right" toastOptions={{
        style: {
          background: 'var(--card-bg)',
          color: 'var(--text-primary)',
          backdropFilter: 'blur(10px)',
          border: '1px solid var(--border-color)',
        }
      }} />
      <Header title="My Todos List"/>
      <main className="main-content container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} updateTodo={updateTodo} />
              </>
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

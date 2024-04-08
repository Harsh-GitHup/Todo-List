// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import AddTodo from './Components/AddTodo';
import About from './Components/About';
import './App.css';

function App() {
  // Initialize todos using a function to handle local storage parsing
  const initTodos = () => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    return storedTodos || [];
  };

  const [todos, setTodos] = useState(initTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    // Use a functional update to avoid potential issues with asynchronous state updates
    setTodos((prevTodos) => prevTodos.filter((e) => e !== todo));
  };

  const updateTodo = (sno, newTitle, newDesc) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.sno === sno ? { ...t, title: newTitle, desc: newDesc } : t))
    );
  };

  const addTodo = (title, desc) => {
    const sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
    const myTodo = { sno, title, desc };
    // Use a functional update to ensure correct state transition
    setTodos((prevTodos) => [...prevTodos, myTodo]);
  };

  return (
    <Router>
      <Header title="My Todos List"/>
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
      <Footer />
    </Router>
  );
}

export default App;

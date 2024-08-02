import { useState, useEffect } from 'react';
import { saveTodos, loadTodos } from '../utils/storage';

const useToDo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const loadedTodos = await loadTodos();
      setTodos(loadedTodos);
    };

    fetchTodos();
  }, []);

  useEffect(() => {
    const save = async () => {
      await saveTodos(todos);
    };

    save();
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  }

  return { todos, addTodo, deleteTodo, completeTodo };
};

export default useToDo;
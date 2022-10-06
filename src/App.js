import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const { data } = await axios.get("http://localhost:1337/api/todos");
    setTodos(data.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="container">
      <h1>Strapi TEST</h1>
      <TodoList todos={todos} />
      <a href="http://localhost:1337/admin">Strapi Admin</a>
    </div>
  );
}

export default App;

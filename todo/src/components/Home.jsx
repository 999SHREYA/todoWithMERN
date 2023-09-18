import { useState } from "react";
import Create from "./Create";
import './Home.css'

const Home = () => {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <div className="home">
        <h2>TODO LIST</h2>
        <Create />
        {todos.length === 0 ? (
          <div>
            <h2>No Records Entered</h2>
          </div>
        ) : (
          todos.map((todo) => {
            <div>{todo}</div>;
          })
        )}
      </div>
    </>
  );
};

export default Home;

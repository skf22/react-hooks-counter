import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1 className="title">React Hooks Counter App</h1>
      <h1
        className={
          count > 0 ? "positive num" : count < 0 ? "negative num" : "num"
        }
      >
        {count}
      </h1>
      <div className="button-wrapper">
        <button
          className="btn"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <button
          className="btn"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;

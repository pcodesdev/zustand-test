import React from "react";
import Button from "react-bootstrap/Button";
import useStore from "./store";

import "./App.css";

function App() {
  const count = useStore((state) => state.count);
  const increaseCount = useStore((state) => state.increaseCount);
  const decreaseCount = useStore((state) => state.decreaseCount);
  const removeCount = useStore((state) => state.removeCount);

  return (
    <div className="App">
      <h1 className="text-decoration-underline">The count is: {count}</h1>
      <div className="card  shadow-lg border border-success rounded-4 p-3 mb-5 bg-body-tertiary rounded">
        <Button variant="primary" className="m-2" onClick={increaseCount}>
          Increase
        </Button>{" "}
        <Button variant="secondary" className="m-2" onClick={decreaseCount}>
          Decrease
        </Button>{" "}
        <Button variant="success" className="m-2" onClick={removeCount}>
          Reset
        </Button>{" "}
      </div>
    </div>
  );
}

export default App;

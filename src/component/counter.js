import { useState } from "react";

function Counter() {
  const [likes, setLikes] = useState(6);

  function increment() {
    setLikes(likes + 1);
  }

  function dincrement() {
    setLikes(likes - 1);
  }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={increment}>+</button>
      <button onClick={dincrement}>-</button>
    </div>
  );
}

export default Counter;

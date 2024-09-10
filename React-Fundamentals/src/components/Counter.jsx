import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("Enter something");

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <h2>{value}</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}

import React, { useState } from "react";

export default function HelloPage() {
  const [value, setvalue] = useState("");
  const [visible, setVisible] = useState(false);

  const toggle = () => value === "hello" && setVisible((prev) => !prev);
  const onChange = (e) => setvalue(e.target.value);

  return (
    <div>
      <input onChange={onChange} type="text" id="search" />
      <button onClick={toggle} id="toggle">
        HELLO WORLD
      </button>
      {visible && <h1 id="hello">HELLO WORLD</h1>}
    </div>
  );
}

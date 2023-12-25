import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript", body: "Description" },
    { id: 3, title: "Javascript", body: "Description" },
  ]);

  return (
    <div className="App">
      <MyInput type="text" placeholder="Name of the post" />
      <MyInput type="text" placeholder="Description of the post" />
      <MyButton>Create post</MyButton>
      <PostList posts={posts} title="Javascript posts" />
    </div>
  );
}

export default App;

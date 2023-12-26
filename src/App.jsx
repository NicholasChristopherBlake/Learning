import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "z" },
    { id: 2, title: "Python", body: "aaa" },
    { id: 3, title: "Babel", body: "b" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Sorting"
        options={[
          { value: "title", name: "By name" },
          { value: "body", name: "By description" },
        ]}
      />
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Javascript posts" />
      ) : (
        <h1 style={{ textAlign: "center", marginTop: "1rem" }}>
          No Current Posts
        </h1>
      )}
    </div>
  );
}

export default App;

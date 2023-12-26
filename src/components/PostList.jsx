import React from "react";
import PostItem from "./PostItem";

export default function PostList({ posts, title, remove }) {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          key={post.id}
          remove={remove}
          number={index + 1}
          post={post}
        />
      ))}
    </div>
  );
}

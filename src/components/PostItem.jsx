import React from "react";
import MyButton from "./UI/button/MyButton";

export default function PostItem({ post, number, remove }) {
  return (
    <div className="post">
      <div className="post__body">
        <strong>
          {number}. {post.title}
        </strong>
        <p>{post.body}</p>
      </div>
      <MyButton onClick={() => remove(post)} className="button__delete">
        Delete
      </MyButton>
    </div>
  );
}

import React from "react";
import MyButton from "./UI/button/MyButton";
import { Link } from "react-router-dom";

export default function PostItem({ post, number, remove }) {
  return (
    <div className="post">
      <div className="post__body">
        <strong>
          {post.id}. {post.title}
        </strong>
        <p>{post.body}</p>
      </div>
      <div className="post__buttons">
        <Link to={`${post.id}`}>
          <MyButton className="button__delete">Open</MyButton>
        </Link>
        <MyButton onClick={() => remove(post)} className="button__delete">
          Delete
        </MyButton>
      </div>
    </div>
  );
}

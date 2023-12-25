import React from "react";

export default function PostItem({ post }) {
  return (
    <div className="post">
      <div className="post__body">
        <strong>
          {post.id}. {post.title}
        </strong>
        <p>{post.body}</p>
      </div>
      <button className="button__delete">Delete</button>
    </div>
  );
}

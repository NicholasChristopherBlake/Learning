import React from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function PostList({ posts, title, remove }) {
  if (!posts.length) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>
        No Current Posts
      </h1>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} classNames="post" timeout={500}>
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

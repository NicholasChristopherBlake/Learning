import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [localPost, setLocalPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getPostById(params.id);
    setLocalPost(response.data);
  });

  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getCommentsByPostId(params.id);
    setComments(response.data);
    console.log(response.data);
  });

  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, []);

  return (
    <div>
      {error && <h1 style={{ color: "red", textAlign: "center" }}>{error}</h1>}
      <div>
        <h1>You've opened a post page with id = {params.id}</h1>

        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <h2>
              {localPost.id}. {localPost.title}
            </h2>
            <p>{localPost.body}</p>
          </div>
        )}
        {isComLoading ? (
          <Loader />
        ) : (
          <div>
            <h1>Comments</h1>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {comments.map((com) => (
                <div key={com.id}>
                  <h5>{com.name}</h5>
                  <h6>{com.email}</h6>
                  <p>{com.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostIdPage;

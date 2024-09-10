import React, {useState} from "react"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import PostService from "../API/PostService"
import { useFetching } from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams(); // возвращает id
  const [post, setPost] = useState({}); // создаем состояние и поместим сюда новый пост от сервера
  const [comments, setComments] = useState([]); // создаем состояние для комментариев
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data); // помещаем поле data в наше новое состояние post
  })
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data); // помещаем поле data в наше новое состояние для комментариев
  })
  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [])

  return (
    <div>
      <h1>You Opened Post Page with ID = {params.id}</h1>
      {isLoading
        ? <Loader/>
        : <div>{post.id}. {post.title}</div>
      }
      <h1>
        Comments
      </h1>
      {/* Создаем отображение комментариев */}
      {isComLoading
        ? <Loader/>
        : <div>
          {comments.map(comm => 
              <div key={comm.id} style={{marginTop: '15px'}}>
                <h5>{comm.email}</h5>
                <div>{comm.body}</div>
              </div>
            )}
          </div>
      }
    </div>
  )
};

export default PostIdPage;

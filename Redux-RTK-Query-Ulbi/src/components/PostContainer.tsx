import React, { useEffect, useState } from "react"
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
  const [limit, setLimit] = useState(100);
  const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(limit)
  const [createPost, {}] = postAPI.useCreatePostMutation()
  const [updatePost, {}] = postAPI.useUpdatePostMutation()
  const [deletePost, {}] = postAPI.useDeletePostMutation()

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLimit(3)
  //   }, 2000)
  // }, [])

  const handleCreate = async () => {
    const title = prompt()
    await createPost({title, body: title} as IPost)
  }

  const handleRemove = (post: IPost) => {
    deletePost(post)
  }

  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }

  return (
    <div>
      <div className="post__list">
        <button onClick={handleCreate}>Add New Post</button>
        {isLoading && <h1>Loading in progress...</h1>}
        {error && <h1>Error has occured</h1>}
        {posts && posts.map(post => 
            <PostItem 
            remove={handleRemove}
            update={handleUpdate}
            key={post.id} post={post}/>
        )}
      </div>
    </div>
  )
};

export default PostContainer;

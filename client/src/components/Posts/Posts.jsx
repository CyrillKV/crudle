import React from "react";
import { useSelector } from 'react-redux';
import Post from "./Post/Post"


const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="posts_container">
      {posts.map((post) => <Post key={ post._id } post={ post } setCurrentId={ setCurrentId }/>)}
    </div>
  )
};

export default Posts;
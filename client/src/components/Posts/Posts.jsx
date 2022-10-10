import React from "react";
//import { useSelector } from 'react-redux';
import Post from "./Post/Post"


const Posts = () => {
  //const posts = useSelector((state) => state.posts);
  return (
    <div className="posts-container">
      <h1>Posts Here</h1>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
};

export default Posts;
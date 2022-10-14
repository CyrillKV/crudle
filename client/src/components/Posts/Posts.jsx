import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';
//import Post from "./Post/Post"


const Posts = () => {
  const posts = useSelector((state) => state.posts);
  return (
    <Spinner animation="border" variant="primary" />
  )
};

export default Posts;
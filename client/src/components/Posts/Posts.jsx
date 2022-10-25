import React from "react";
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import Post from "./Post/Post"


const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return (
    <Container>
      {posts.map((post) => <Post key={ post._id } post={ post } setCurrentId={ setCurrentId }/>)}
    </Container>
  )
};

export default Posts;
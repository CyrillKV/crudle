import React from "react";
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import Post from "./Post/Post"


const Posts = ({ setCurrentId, switchShowModal }) => {
  const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid container alignItems="stretch" spacing={4}>
        {posts.map((post) => (
          <Grid item key={post._id} xs={12} sm={6} md={4}>
            <Post post={post} setCurrentId={setCurrentId} switchShowModal={switchShowModal} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
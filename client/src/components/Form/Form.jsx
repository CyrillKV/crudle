import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Grid } from '@mui/material';
import FileBase from 'react-file-base64';

import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';


const Form = ({ currentId, setCurrentId, switchShowModal }) => {
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '', });
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
  const user = JSON.parse(localStorage.getItem('profile'));

  const dispatch = useDispatch();

  useEffect(() => {
    if(post) setPostData(post)
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(currentId){
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
    } else {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
    }
    clear();
    switchShowModal();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({ title: '', message: '', tags: '', selectedFile: '', });
  };

  if (!user?.result?.name) {
    return (
      <Paper>
        <Typography variant="h6" align="center" padding='2rem'>
          Please Sign In to add posts.
        </Typography>
      </Paper>
    );
  }

  return (
    <>
    <Typography variant="h5" marginBottom="1rem">{currentId ? `Editing "${post.title}"` : 'Creating a post'}</Typography>
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        </Grid>
        <Grid item xs={12}>
          <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        </Grid>
        <Grid item xs={12}>
          <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        </Grid>
        <Grid item xs={12} marginBottom='1rem'>
          <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        </Grid>
        <Grid container justifyContent='space-around'>
          <Grid item>
            <Button variant="contained" color="primary" size="medium" type="submit" fullWidth>Submit</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" size="medium" onClick={clear} fullWidth>Clear</Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
    </>
  );
};

export default Form;
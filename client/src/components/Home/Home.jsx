import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
//import { Container } from '@mui/material';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const Home = () => {
  const [ currentId, setCurrentId ] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Posts currentId={currentId} setCurrentId={setCurrentId}/>
      <Form currentId={currentId} setCurrentId={setCurrentId}/>
    </>
  );
};

export default Home;

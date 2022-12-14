import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

import Button from '@mui/material/Button';

import Posts from '../Posts/Posts';
import ModalForm from '../Form/ModalForm';

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const switchShowModal = () => setShowModal(prev => !prev);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <Button variant='contained' size='large' sx={{m: '1rem 0', borderRadius: '0 25px 0 0'}} color='primary' onClick={switchShowModal}>+ Add Card</Button>
      <ModalForm currentId={currentId} setCurrentId={setCurrentId} showModal={showModal} switchShowModal={switchShowModal}/>
      <Posts setCurrentId={setCurrentId} switchShowModal={switchShowModal}/>
    </>
  );
};

export default Home;
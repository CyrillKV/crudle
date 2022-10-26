import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Navbar from './components/Navbar/Navbar';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';


const App = () => {
  const [ currentId, setCurrentId ] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div className='main'>
      <Navbar />
      <Posts setCurrentId={ setCurrentId }/>
      <Form currentId={ currentId } setCurrentId={ setCurrentId }/>
    </div>
  );
};

export default App;

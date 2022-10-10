import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="main">
      <h1>Project0</h1>
      <Posts/>
      <hr/>
      <Form/>
    </div>
  );
};

export default App;

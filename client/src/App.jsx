import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts'
import Posts from "./components/Posts/Posts";
import PostForm from "./components/Form/Form";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  const [ currentId, setCurrentId ] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center"><h1>Project Name</h1></Col>
      </Row>
      <Row>
        <Col>
          <Posts setCurrentId={ setCurrentId }/>
        </Col>
        <Col>
          <PostForm currentId={ currentId } setCurrentId={ setCurrentId }/>
        </Col>
      </Row>
    </Container>
  );
};

export default App;

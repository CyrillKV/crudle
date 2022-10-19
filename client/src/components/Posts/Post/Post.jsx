import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import moment from 'moment';

const Post = ({ post, setCurrentId }) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ post.selectedFile }/>
      <Card.Body>
        <Card.Title>{ post.title }</Card.Title>
        <Card.Text>{ post.message }</Card.Text>
        <Card.Text>{moment(post.createdAt).fromNow()}</Card.Text>
        <Button variant="primary" onClick={() => setCurrentId(post._id)}>Edit</Button>
        <Button variant="secondary" size="sm">Remove</Button>
      </Card.Body>
    </Card>
  )
};

export default Post;

import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../api";


const PostForm = () => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '', });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    //console.log(postData);
    e.preventDefault();
    dispatch(createPost(postData));
  };

  return (
    <Form>
      <legend>Creating post:</legend>
      <Form.Group className="mb-3">
        <Form.Label>Creator:</Form.Label>
        <Form.Control type="text" value={ postData.creator } onChange={(e) => { setPostData({ ...postData, creator: e.target.value }) }} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Title:</Form.Label>
        <Form.Control type="text" value={ postData.title } onChange={(e) => { setPostData({ ...postData, title: e.target.value }) }} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Message:</Form.Label>
        <Form.Control type="text" value={ postData.message } onChange={(e) => { setPostData({ ...postData, message: e.target.value }) }} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Tags:</Form.Label>
        <Form.Control type="text" value={ postData.tags } onChange={(e) => { setPostData({ ...postData, tags: e.target.value }) }} />
      </Form.Group>
    </Form>
  )
};

export default PostForm;

/*<FileBase type="file" multiple = {false} onDone = {({ base64 }) => setPostData({...postData, selectedFile: base64})}/>
      <div className="btns">
        <button type="submit">Submit</button>
        <button >Clear</button>
      </div>*/
import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../api";


const Form = () => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '', });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };

  return (
    <form autoComplete="off" className="form" onSubmit={ handleSubmit }>
      <legend>Creating post:</legend>
      <label>Creator:
        <input type="text" value={ postData.creator } onChange={(e) => { setPostData({ ...postData, creator: e.target.value }) }}></input>
      </label>
      <label>Title:
        <input type="text" value={ postData.title } onChange={(e) => { setPostData({ ...postData, title: e.target.value }) }}></input>
      </label>
      <label>Message:
        <input type="text" value={ postData.message } onChange={(e) => { setPostData({ ...postData, message: e.target.value }) }}></input>
      </label>
      <label>Tags:
        <input type="text" value={ postData.tags } onChange={(e) => { setPostData({ ...postData, tags: e.target.value }) }}></input>
      </label>
      <FileBase type="file" multiple = {false} onDone = {({ base64 }) => setPostData({...postData, selectedFile: base64})}/>
      <div className="btns">
        <button type="submit">Submit</button>
        <button >Clear</button>
      </div>
    </form>
  )
};

export default Form;
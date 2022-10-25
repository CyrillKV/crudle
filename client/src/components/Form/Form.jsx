import React, { useState, useEffect } from 'react';
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";


const PostForm = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '', });
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id == currentId) : null);

  const dispatch = useDispatch();

  useEffect(() => {
    if(post) setPostData(post)
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId){
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '', });
  };

  return (
    <form autoComplete="off" className="form" onSubmit={ handleSubmit }>
      <legend> { currentId ? 'Editing' : 'Creating' } post:</legend>
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
        <button onClick={ clear }>Clear</button>
      </div>
    </form>
  )
};

export default PostForm;

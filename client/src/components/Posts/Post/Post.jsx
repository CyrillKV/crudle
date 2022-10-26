import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts'
import moment from 'moment';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <div className='post'>
      <img src={ post.selectedFile } alt=''/>
      <p>{ post.title }</p>
      <p>{ post.message }</p>
      <div className='likes'>
        <span>{ post.likeCount }</span>
        <button onClick={() => dispatch(likePost(post._id)) }>Like</button>
      </div>
      <p>{moment(post.createdAt).fromNow()}</p>
      <div className='btns'>
        <button onClick={() => setCurrentId(post._id)}>Edit</button>
        <button onClick={ () => dispatch(deletePost(post._id)) }>Delete</button>
      </div>
    </div>
  )
};

export default Post;

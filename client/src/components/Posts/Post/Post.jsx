import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { ThumbUpAlt, ThumbUpAltOutlined, Delete, Edit } from '@mui/icons-material';
import moment from 'moment';

import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../../../actions/posts'


const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?._id))
        ? (
          <><ThumbUpAlt fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  return (
    <Card>
      <CardMedia image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
          <Likes />
        </Button>
        {(user?.result?._id === post?.creator) ? (
        <>
        <Button size="small" color="secondary" onClick={() => setCurrentId(post._id)} >
          <Edit fontSize="small" />
        </Button>
        <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
          <Delete fontSize="small" />
        </Button>
        </>
        ) : null}
      </CardActions>
    </Card>
  )
};

export default Post;

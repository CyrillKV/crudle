import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import { LOGOUT } from '../../constants/actionTypes';


const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigate('/auth');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout()
      }
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar position="static" color="inherit" sx={{
      borderRadius: 4,
      margin: '0',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: '10px 40px',
    }}>
      <Typography component={Link} color='primary' to='/' variant='h2' align='center' sx={{
        textDecoration: 'none',
        justifyContent: 'flex-start'
      }}><b>CRUD</b>le</Typography>
      <Toolbar sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        maxWidth: '400px',
      }}>
      {user ? (
        <>
        <Avatar alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
        <Typography variant='h6'sx={{px: '1rem'}}>{user.result.name}</Typography>
        <Button variant='contained' color='secondary' onClick={ logout }>Logout</Button>
        </>
        ) : (
          <Button component={Link} to='/auth' variant='contained' color='primary'>Sign In</Button>
          )}
      </Toolbar>
    </AppBar>
  )
};

export default Navbar;
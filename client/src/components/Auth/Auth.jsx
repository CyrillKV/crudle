import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup, signin } from '../../actions/auth';

import { Avatar, Button, Typography, Paper, Grid, Container } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';

import Input from './Input';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData));
    } else {
      dispatch(signin(formData));
    };
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setFormData(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  return (
    <Container component="main" maxWidth="xs" sx={{mt: '15vh'}}>
      <Paper elevation={3} sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: '1rem',
        width: 380,
      }}>
        <Avatar sx={{backgroundColor: 'lightblue',}}>
          <LockOutlined/>
        </Avatar>
        <Typography variant='h5' margin='1rem' ><b>{isSignup ? 'Sign Up' : 'Sign In'}</b></Typography>
        <form onSubmit={ handleSubmit }>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input name='firstName' label='First Name' handleChange={ handleChange } autoFocus half/>
                <Input name='lastName' label='Last Name' handleChange={ handleChange } half/>
              </>
            )}
            <Input name='email' label='Email Adress' handleChange={ handleChange } type='email'/>
            <Input name='password' label='Password' handleChange={ handleChange } type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
            {isSignup && 
            <Input name='confirmPassword' label='Confirm Password' handleChange={ handleChange } type='password'/>}
          </Grid>
          <Button type='submit' fullWidth variant='contained' color='primary' sx={{my: '1rem'}}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={ switchMode }>
                { isSignup ? "Already have an account? Sign In!" : "Don't have an account? Sign Up!" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
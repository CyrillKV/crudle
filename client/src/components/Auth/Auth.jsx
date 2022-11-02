import React, { useState } from 'react';

import { Avatar, Button, Typography, Paper, Grid, Container, TextField } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';

import Input from './Input';

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const isSignup = false;

  const handleSubmit = () => {};

  const handleChange = () => {};

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3}>
        <Avatar>
          <LockOutlined/>
        </Avatar>
        <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form onSubmit={ handleSubmit }>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input name='firstName' label='First Name' handleChange={ handleChange } autoFocus half/>
                <Input name='lastName' label='Last Name' handleChange={ handleChange } autoFocus/>
              </>
            )}
            <Input name='email' label='Email Adress' handleChange={ handleChange } type='email'/>
            <Input name='password' label='Password' handleChange={ handleChange } type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
            {isSignup && 
            <Input name='confirmPassword' label='Confirm Password' handleChange={ handleChange } type='password'/>}
          </Grid>
          <Button type='submit' fullWidth variant='contained' color='primary'>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
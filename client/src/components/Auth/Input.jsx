import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Input = ({ name, label, type, half, handleChange, autoFocus, handleShowPassword }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField 
        name={name}
        label={label}
        onChange={handleChange}
        variant='outlined'
        required
        fullWidth
        autoFocus={autoFocus}
        type={type}
        InputProps={name === 'password' ? {
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={ handleShowPassword }>
                {type === 'password' ? <Visibility /> : <VisibilityOff/>}
              </IconButton>
            </InputAdornment>
          )
        } : null} 
      />
    </Grid> 
  );
};

export default Input;
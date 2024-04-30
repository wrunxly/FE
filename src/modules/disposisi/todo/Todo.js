import React from 'react';
import noTodo from '../../../assets/Todo/noTodo.svg';
import { Stack, Typography } from '@mui/material';

const Todo = () => {
  return (
    <Stack
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <img src={noTodo} alt='belum memilih' />
      <Typography fontWeight={'700'} >Anda belum memilih</Typography>
    </Stack>
  );
};

export default Todo;

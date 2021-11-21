import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Circular = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress disableShrink />
    </Box>
  );
};

export default Circular;

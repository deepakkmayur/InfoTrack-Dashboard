import React from 'react'
import Aside from './Aside'
import MainContent from './MainContent'
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

const Layout = () => {
 
  return (
    <Box
      sx={{
        borderRadius: '15px',
        boxShadow:" 0 0 20px rgba(0, 0, 0, 0.5)",
        display: 'flex',
        height:"100%"
      }}
    >
      <Aside />
      <MainContent/>
    </Box>
  )
}

export default Layout



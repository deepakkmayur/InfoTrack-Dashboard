import React from 'react'
import Aside from './Aside'
import MainContent from './MainContent'
import { Box } from '@mui/material';

const Layout = () => {
  return (
    <Box
      sx={{
        borderRadius: '15px',
        boxShadow:" 0 0 20px rgba(0, 0, 0, 0.5)",

        // flexGrow: 1,
        display: 'flex',
        // overflow: 'hidden', 
        // margin:"2% 5% 2% 5%",
        // margin:'70px',
        height:"100%"
            
      }}
    >
      <Aside />
      <MainContent/>
    </Box>
  )
}

export default Layout



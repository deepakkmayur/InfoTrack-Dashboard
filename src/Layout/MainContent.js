import React from 'react'
import Header from './Header'
import Dashboard from './Dashboard'
import { Box ,Typography} from '@mui/material';

const MainContent = () => {
 
  return (
    <Box
    sx={{
    //   display: 'flex',
    //   flexDirection: 'column',
    //   height: '5rem',  
    // backgroundColor: 'red',
      width: '100%',  
      borderTopRightRadius:"15px",
      borderBottomRightRadius:"15px",
      // boxShadow:" 0 8px 8px rgba(0, 0, 0, 0.2)"
      // overflow:"auto"
    }}
    >
    <Header/>
    <Typography sx={{ fontSize: "22px", fontWeight: "bold",marginTop:1  ,marginLeft:2 }}>Dashboard</Typography>
    <Dashboard/>
    </Box>
  )
}

export default MainContent
import React from 'react'
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import Layout from './Layout/Layout'
import "./App.css"

const App = () => {
  return (
    // <Box sx={{ width: '100%',height:"100vh", bgcolor: '#D9D4E2',padding:"20px 50px"}}>
    <Box sx={{ width: '100%',height:"100vh"}}>
    <Layout />
    </Box>

  )
}

export default App
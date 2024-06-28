import { Box, Typography } from '@mui/material'
import React from 'react'
import SelectedRecord from './SelectedRecord'
import Graph from './Graph'

import { Container } from '@mui/material';

const SelectRecordGraph = () => {

  
  return (
   <Box
   sx={{
      height:"20%",
       backgroundColor:"lightseagreen",
       display:"flex"

   }}
   >
   <SelectedRecord/>
      <Box
      sx={{
        width:"80%",
        height:"100%",
        // overflow:"inherit"
      }}>
      <Graph />

      </Box>

   </Box> 
  )
}

export default SelectRecordGraph






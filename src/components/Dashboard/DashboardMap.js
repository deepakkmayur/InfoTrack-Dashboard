import React from 'react'
import { Box } from '@mui/material'
import GoogleMap from "./GoogleMap"


const DashboardMap = () => {
  return (
   < Box
   sx={{
// backgroundColor:"lightcoral",
// height:"25%",
// paddingLeft:5
        height: '30%', // Adjust height as needed
        width: '100%', // Adjust width as needed
        paddingLeft: 5,
        // overflow: 'hidden'


   }}
   >
   <GoogleMap/>

   </Box>
  )
}

export default DashboardMap
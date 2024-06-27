import React from 'react'
import { Box ,Typography} from '@mui/material'
import DashboardCard from '../components/Dashboard/DashboardCard'
import DashboardMap from '../components/Dashboard/DashboardMap'
import SelectedRecordMap from '../components/Dashboard/SelectedRecordMap'
import Records from '../components/Dashboard/Records'
import DashboardTop from '../components/Dashboard/DashBoardTop'


const Dashboard = () => {
  
  return (
 <Box
 sx={{
  // backgroundColor:"red",
  // height:"100vh",
  width:"100%",
  // flex:1,
  height:"90%",
  borderBottomRightRadius:"15px"
 }}
 >
  
<DashboardTop/>
<Typography sx={{ fontSize: "22px", fontWeight: "bold" ,marginLeft:2 }}>Track on map</Typography>
<DashboardMap/>
<SelectedRecordMap/>
<Records/>

 </Box>
  )
}

export default Dashboard
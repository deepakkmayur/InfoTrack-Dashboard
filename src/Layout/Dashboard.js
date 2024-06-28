import React from 'react'
import { Box ,Typography} from '@mui/material'
import DashboardCard from '../components/Dashboard/DashboardCard'
import DashboardMap from '../components/Dashboard/DashboardMap'
import SelectedRecordMap from '../components/Dashboard/SelectedRecordMap'
import Records from '../components/Dashboard/Records'
import DashboardTop from '../components/Dashboard/DashBoardTop'
import SelectRecordGraph from '../components/Dashboard/SelectRecordGraph'


const Dashboard = () => {
  const styleSx={
    // backgroundColor:"red",
    width:"100%",
    // flex:1,
    height:"90%",
    borderBottomRightRadius:"15px",
   }

  return (
 <Box
 sx={styleSx}
 >
  
<DashboardTop/>
<DashboardMap/>
<Typography>Selected Records</Typography>

<SelectRecordGraph/>
<Records/>

 </Box>
  )
}

export default Dashboard
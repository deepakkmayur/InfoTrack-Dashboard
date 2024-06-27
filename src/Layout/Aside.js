import React from 'react';
import { Box, Typography } from '@mui/material';
import AsideCard from '../components/AsideCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AssessmentIcon from '@mui/icons-material/Assessment';

const Aside = () => {
  const contentArray = [
    { icon: <DashboardIcon sx={{ color: 'red',fontSize: 40 }} />, title: "Dashboard" },
    { icon: <LocationOnIcon sx={{ color: 'red',fontSize: 40 }} />, title: "Track on map" },
    { icon: <AssessmentIcon sx={{ color: 'red',fontSize: 40 }} />, title: "Report" }
  ]


  return (
    <Box
      sx={{
        width: '360px',
        // height: '100vh',
        // height: "808px",
        // boxShadow:5,
        boxShadow:" 0 0 20px rgba(0, 0, 0, 0.2)",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 2,
        borderTopLeftRadius: "15px",
        borderBottomLeftRadius: "15px",

      }}
    >
      <Typography sx={{ fontSize: '30px', marginBottom: 12}}>
        <span style={{ color: 'red' }}>Info</span>
        <span style={{ color: 'blue' }}>Track</span>
      </Typography>

      {contentArray.map((ele)=>(
        <AsideCard icon={ele.icon} title={ele.title}/>
      ))}
    
    </Box>
  );
};

export default Aside;

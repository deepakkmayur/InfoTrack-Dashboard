import React from 'react';
import { Box, Typography } from '@mui/material';
import AsideCard from '../components/AsideCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AssessmentIcon from '@mui/icons-material/Assessment';

const Aside = () => {
  const contentArray = [
    {id:1, icon: <DashboardIcon sx={{ color: '#000000',fontSize: 40 }} />, title: "Dashboard" },
    { id:2,icon: <LocationOnIcon sx={{ color: '#000000',fontSize: 40 }} />, title: "Track on map" },
    {id:3, icon: <AssessmentIcon sx={{ color: '#000000',fontSize: 40 }} />, title: "Report" }
  ]


  return (
    <Box
      sx={{
        width: '360px',
        height: "100%",
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
        <AsideCard key={ele.id} icon={ele.icon} title={ele.title}/>
      ))}
    
    </Box>
  );
};

export default Aside;

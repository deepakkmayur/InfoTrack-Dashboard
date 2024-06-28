import { Box, Typography } from '@mui/material';
import React from 'react';

const DashboardCard = ({cardDetails}) => {
 
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        justifyContent: 'space-evenly',
        // backgroundColor:"red",
        marginBottom:2,
        padding:"5px 20px 0 20px",
        height:"70%"
        
      }}
    >
      {cardDetails.map((card, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "row",
            width: {
              xs: '80%',  
              sm: '45%',  
              md: '30%',  
              lg: '20%',  
              xl: '18%', 
            },
            height: '100%',
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
            borderRadius: "20px",
            margin: "10px",
            // backgroundColor: 'yellow',
          }}
        >
          <Box
            sx={{
              width: "35%",
              height:"100%",
              display: "flex",
              flexDirection: "column",
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: 1,
            }}
          >
            <img src={card.image} alt="Image" style={{ width: '80%', height: 'auto', borderRadius: '10px', marginTop: '-15px' }} />
            <Typography sx={{ fontSize: "17px", color: `${card.color}`, fontWeight: "bold" }}>{card.percentage}%</Typography>
            <Typography sx={{ fontSize: "60%", fontWeight: "bold" }}>{card.view}</Typography>
          </Box>

          <Box
            sx={{
              width: "65%",
              display: "flex",
              flexDirection: "column",
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 1,
              textAlign: 'center',
            }}
          >
            <Typography sx={{ fontSize: "100%", color:`${card.color}`, fontWeight: "bold" }}>{card.movement}</Typography>
            <Typography sx={{ fontSize: "120%", fontWeight: "bold" }}>{card.number}</Typography>
            <Typography sx={{ fontSize: "60%", fontWeight: "bold" }}>{card.viewMap}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default DashboardCard;

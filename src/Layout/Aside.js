import React from 'react';
import { Box } from '@mui/material';
import AsideCard from '../components/AsideCard';

const Aside = () => {
  const array=[{}]
  return (
    <Box
      sx={{
        width: '20%',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bgcolor: 'background.paper',
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 2,
      }}
    >
      <AsideCard title="Card 1" content="This is the content of card 1." />
      <AsideCard title="Card 2" content="This is the content of card 2." />
      <AsideCard title="Card 3" content="This is the content of card 3." />
    </Box>
  );
};

export default Aside;

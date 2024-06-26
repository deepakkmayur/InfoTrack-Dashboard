import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const AsideCard = ({ title, content }) => {
  return (
    <Card
      sx={{
        width: '90%',
        marginBottom: 2,
        ':hover': {
          bgcolor: 'lightpink',
        },
        boxShadow: 'none', 
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AsideCard;

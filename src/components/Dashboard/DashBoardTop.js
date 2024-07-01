import React from 'react';
import { Box } from '@mui/material';
import DashboardCard from './DashboardCard';

import image1 from '../../images/DashboardCard/c1.jpg';
import image2 from '../../images/DashboardCard/c2.jpg';
import image3 from '../../images/DashboardCard/c3.jpg';
import image4 from '../../images/DashboardCard/c4.jpg';
import image5 from '../../images/DashboardCard/c5.jpg';

const DashBoardTop = () => {
  const cardDetails = [
    { image: image5, percentage: 75, view: 'View Details', movement: 'Moving', number: 204, viewMap: 'View  Map', color: 'green' },
    { image: image3, percentage: 90, view: 'View Details', movement: 'Stopped', number: 300, viewMap: 'View  Map', color: 'red' },
    { image: image4, percentage: 60, view: 'View Details', movement: `Standby`, number: 124, viewMap: 'View  Map', color: 'orange' },
    { image: image1, percentage: 70, view: 'View Details', movement: 'Inactive', number: 264, viewMap: 'View  Map', color: 'grey' },
    { image: image2, percentage: 85, view: 'View Details', movement: 'Service', number: 154, viewMap: 'View  Map', color: '#b33b72' },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        paddingRight: 1,
      }}
    >
      <DashboardCard cardDetails={cardDetails} />
    </Box>
  );
};

export default DashBoardTop;

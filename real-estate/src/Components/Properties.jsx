import { Box, Container, styled, Typography } from '@mui/material';
import React from 'react';
import House from './House';
import { properties } from '../properties';

const Properties = () => {
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',

    marginTop: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }));

  return (
    <Box className='Properties' sx={{ mt: 5, backgroundColor: '#f5fafb', py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography sx={{ color: '#000339', fontSize: '35px', fontWeight: 'bold' }}>Featured Properties</Typography>
          <Typography sx={{ color: '#5a6473', fontSize: '16px', mt: 1 }}>
            Everything you need to know looking for a new home!
          </Typography>
        </PropertiesTextBox>

        <PropertiesBox>
          {properties.map((item) => (
            <House
              key={item.id}
              img={item.img}
              price={item.price}
              address={item.address}
              bedrooms={item.bedrooms}
              bathrooms={item.bathrooms}
              space={item.space}
            />
          ))}
        </PropertiesBox>
      </Container>
    </Box>
  );
};

export default Properties;

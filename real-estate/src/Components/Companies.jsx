import { Box, Container, styled, Typography } from '@mui/material';
import React from 'react';
import logoImg from '../media/logo.png';
import starsImg from '../media/Star.png';
import logosImg from '../media/logos.png';

const Companies = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: theme.spacing(4)
    }
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(4)
    }
  }));

  return (
    <Box className='companies' sx={{ mt: 10 }}>
      <CustomContainer>
        <CustomBox>
          <img src={logoImg} alt='logo' style={{ maxWidth: '100%' }} />
          <Typography variant='body2' sx={{ color: '#7d8589', fontSize: '16px', fontWeight: 'bold', mt: 2 }}>
            More Than 50.000 trust Besnik
          </Typography>
        </CustomBox>

        <Box>
          <img src={starsImg} alt='stars' style={{ maxWidth: '100%' }} />
          <Typography variant='body2' sx={{ color: '#7d8589', fontSize: '16px', fontWeight: 'bold', mt: 2 }}>
            5-Star Rating (2k+ Reviews)
          </Typography>
        </Box>
      </CustomContainer>

      <Container sx={{ display: 'flex' }}>
        <img src={logosImg} alt='logos' style={{ width: '100%' }} />
      </Container>
    </Box>
  );
};

export default Companies;

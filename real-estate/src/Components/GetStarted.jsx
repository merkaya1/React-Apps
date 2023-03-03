import { Button, styled, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import homeIllustration from '../media/illustration.png';
import CustomButton from './CustomButton';

const GetStarted = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: '#17275f',
    height: '416px',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: theme.spacing(2, 0, 2, 0),
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(3, 3, 0, 3),
      width: '90%'
    }
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 2, 10, 2),
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down('md')]: {
      padding: '0',
      margin: theme.spacing(7, 2, 0, 2)
    }
  }));

  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography sx={{ fontSize: '35px', color: 'white', fontWeight: '700' }}>Featured Properties</Typography>

          <Typography sx={{ fontSize: '16px', color: '#ccc', fontWeight: '500', my: 3 }}>
            Everything you need to know about houses!
          </Typography>

          <CustomButton backgroundColor='#fff' color='#17275f' buttonText='Get Started Now' getStartedBtn={true} />
        </Box>

        <img src={homeIllustration} alt='illustration' style={{ maxWidth: '100%' }} />
      </CustomContainer>
    </CustomBox>
  );
};

export default GetStarted;

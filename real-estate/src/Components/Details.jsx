import { styled, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import houseCard from '../media/houseCard.png';

const Details = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(10),
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      textAlign: 'center'
    }
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    }
  }));

  const LargeText = styled(Typography)(({ theme }) => ({
    fontSize: '64px',
    color: '#000',
    fontWeight: '700',
    [theme.breakpoints.down('md')]: {
      fontSize: '32px'
    }
  }));

  const SmallText = styled(Typography)(({ theme }) => ({
    fontSize: '18px',
    color: '#7b8087',
    fontWeight: '700',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px'
    }
  }));

  const TextFlexbox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(7),
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: theme.spacing(5)
    }
  }));

  const Divider = styled('div')(({ theme }) => ({
    width: '13%',
    height: '5px',
    backgroundColor: '#000339',
    [theme.breakpoints.down('md')]: {
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }));

  return (
    <Box>
      <Container>
        <CustomBox>
          <ImgContainer>
            <img src={houseCard} alt='house' />
          </ImgContainer>

          <Box>
            <Divider />
            <Typography
              sx={{
                fontSize: '35px',
                color: '#000339',
                fontWeight: '700',
                my: 3
              }}>
              You've found a neighborhood
            </Typography>

            <Typography
              sx={{
                fontSize: '16px',
                color: '#5A6473',
                lineHeight: '30px'
              }}>
              When you own a home, you commit to living in one location for a period of time. We are here to ensure that
              this will be a memorable experience for you.
            </Typography>
          </Box>
        </CustomBox>

        <TextFlexbox>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <LargeText>2500+</LargeText>
            <SmallText>Homes For Sale</SmallText>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <LargeText>3000+</LargeText>
            <SmallText>Properties Rented</SmallText>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <LargeText>3500+</LargeText>
            <SmallText>Homes Sold</SmallText>
          </Box>
        </TextFlexbox>
      </Container>
    </Box>
  );
};

export default Details;

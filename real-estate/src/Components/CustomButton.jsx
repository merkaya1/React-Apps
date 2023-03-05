import { Button, styled } from '@mui/material';
import React from 'react';

const CustomButton = ({ backgroundColor, buttonText, color, heroBtn, guideBtn, getStartedBtn }) => {
  const CustomBtn = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: '700',
    cursor: 'pointer',
    padding: '0.5rem 1.25rem',
    borderRadius: '7px',
    textTransform: 'none',
    // display: 'block',
    border: '2px solid transparent',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor
    },
    [theme.breakpoints.down('md')]: {
      margin: (heroBtn || getStartedBtn) && theme.spacing(0, 'auto', 3, 'auto'),
      width: (heroBtn || getStartedBtn) && '90%'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && '90%'
    }
  }));

  return <CustomBtn>{buttonText}</CustomBtn>;
};

export default CustomButton;

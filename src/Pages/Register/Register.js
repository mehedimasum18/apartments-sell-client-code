import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import RegisterForm from './RegisterForm';

const Register = () => {
  const useStyles = makeStyles({
    boxHeight:{
      height:"90vh",
      display:"flex", alignItems:"center", justifyContent:"center"
    }
  })
  const {boxHeight} = useStyles();
  return (
    <>
      <Navigation />
      <Box className={boxHeight}>
        <RegisterForm />
      </Box>
    </>
  );
};

export default Register;
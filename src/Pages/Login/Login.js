import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import LoginForm from './LoginForm';

const Login = () => {
      const useStyles = makeStyles({
        boxHeight: {
          height: "90vh",
          display: "flex",
          background: "#00adff14",
          alignItems: "center",
          justifyContent: "center",
        },
      });
      const { boxHeight } = useStyles();
    return (
      <>
        <Navigation />

        <Box className={boxHeight}>
          
          <LoginForm />
        </Box>
      </>
    );
};

export default Login;
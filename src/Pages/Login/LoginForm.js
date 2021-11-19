import { Alert, Button, CircularProgress, Container, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const LoginForm = () => {
  const { register, handleSubmit} = useForm();
  const { logIn, error, googleSignIn, isLoading, } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const onSubmit = async (data) => {
    const { email, password } = data;
    logIn(email, password, history, location);
  };


    return (
      <>
        <Container style={{ textAlign: "center" }}>
          <h1>Please Login</h1>
          <Paper
            component={Box}
            elevation={3}
            p={3}
            sx={{
              display: "flex",
              alignItems: "center",
              width: { xs: "100%", md: "40%" },
              mx: "auto",
            }}
          >
            <Box
              component="form"
              sx={{ width: "100%" }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                fullWidth
                margin="dense"
                label="Email Address"
                variant="standard"
                {...register("email", { required: true })}
              />
              <TextField
                fullWidth
                margin="dense"
                label="Password"
                type="password"
                variant="standard"
                {...register("password", { required: true })}
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                sx={{ my: 3 }}
              >
                Log in
              </Button>
              {error && <Alert severity="error">{error}</Alert>}
              <Typography variant="body1" color="initial">
                Create an account? <Link to="/register">Register</Link>
              </Typography>
              {isLoading && <CircularProgress />}
              <Button
                variant="contained"
                color="success"
                onClick={googleSignIn}
              >
                {" "}
                Google SignIn{" "}
              </Button>
            </Box>
          </Paper>
        </Container>
      </>
    );
};

export default LoginForm;
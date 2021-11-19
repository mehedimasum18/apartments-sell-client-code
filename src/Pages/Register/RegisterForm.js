import { Alert, Button, Container, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const RegisterForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = React.useState();
  const { signUp, error, setError, googleSignIn } = useAuth();
  
  const history = useHistory();
  const onSubmit = (data) => {
    const { email, password, name, confirmPassword } = data;
    if (password !== confirmPassword) {
      return setError("Password don't Match");
    }
    signUp(email, password, name, history);
  };

  return (
    <Container style={{ textAlign: "center" }}>
      <h1>Please Register</h1>
      <Paper
        component={Box}
        elevation={3}
        p={3}
        sx={{
          display: "flex",
          alignItems: "center",
          width: { xs: "100%", md: "50%" },
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
            label="Name"
            type="text"
            variant="filled"
            {...register("name", { required: true })}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Email Address"
            name="email"
            variant="filled"
            {...register("email", { required: true })}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Password"
            name="password"
            type="password"
            variant="filled"
            {...register("password", { required: true })}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Confirm Password"
            type="password"
            variant="filled"
            {...register("confirmPassword", { required: true })}
          />
          <Button
            disabled={loading}
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ my: 3 }}
          >
            Register
          </Button>
          {error && <Alert severity="error">{error}</Alert>}
          <Typography variant="body1" color="initial">
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
          <Button variant="contained" color="success" onClick={googleSignIn}>
            {" "}
            Google SignIn{" "}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
export default RegisterForm;
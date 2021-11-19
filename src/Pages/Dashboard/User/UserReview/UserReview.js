import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../Hooks/useAuth';

const UserReview = () => {
    const { currentUser } = useAuth();
    const { register, handleSubmit, errors, reset } = useForm();
    const onSubmit = (data) => {
        data.photo = currentUser?.PhotoURL;
        axios
          .post(`https://radiant-wildwood-26012.herokuapp.com/review`, data)
          .then((res) => {
            if (res.data.acknowledged) {
              alert("Thanks for your feedback");
              reset();
            }
          });
        
    }
    return (
      <Container>
        <Typography variant="h4" component={Box} sx={{ my: 2 }}>
          Give Your Review
        </Typography>
        <Paper
          component={Box} elevation={4} p={4}
          sx={{ minWidth: { xs: "100%", md: "70%" }, mx: "auto" }}
        >
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              margin="dense"
              defaultValue={currentUser?.displayName}
              label="Name"
              type="text"
              fullWidth
              variant="filled"
              required
              {...register("name", { required: true })}
            />
            <TextField
              margin="dense"
              label="Your Position"
              type="text"
              fullWidth
              variant="filled"
              required
              {...register("position", { required: true })}
            />
            <TextField
              margin="dense"
              label="Rating Number"
              type="number"
              helperText="Maximum 5 Rating you can"
              fullWidth  variant="filled" required
              {...register("rating", { required: true, maxLength: 5 })}
            />
            <TextField
              margin="dense"
              label="Write your product review"
              type="text"
              fullWidth multiline rows={5} variant="filled" required
              {...register("reviewText", { required: true })}
            />
            <Button type="submit" variant="contained">
              send
            </Button>
          </Box>
        </Paper>
      </Container>
    );
};

export default UserReview;
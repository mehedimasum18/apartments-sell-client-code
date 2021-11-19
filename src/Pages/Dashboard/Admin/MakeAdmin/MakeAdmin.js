import {
  Box, Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";

const MakeAdmin = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const { currentUser } = useAuth();
  const onSubmit = (data) => {
    axios.post(`https://radiant-wildwood-26012.herokuapp.com/admin`, data).then((res) => {
      if (res.data.acknowledged) {
        alert("Admin added successfully");
        reset();
      }
    });
  };
  return (
    <Container>
      <Typography variant="h4" component={Box} sx={{ my: 2 }}>
        Make Admin
      </Typography>
      <Paper
        component={Box}
        elevation={0}
        p={4}
        sx={{ minWidth: { xs: "100%", md: "60%" }, mx: "auto" }}
      >
        <Box
          sx={{ minWidth: { xs: "100%", md: "50%" }, mx: "auto" }}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            label="Email Address"
            fullWidth
            type="email"
            variant="outlined"
            required
            {...register("email", { required: true })}
          />
          <Button
            type="submit"
            sx={{ mt: 4 }}
            variant="outlined"
            color="success"
          >
            Add Admin
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default MakeAdmin;

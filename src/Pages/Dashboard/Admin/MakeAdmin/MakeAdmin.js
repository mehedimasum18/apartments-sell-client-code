import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
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
        elevation={4}
        p={4}
        sx={{ minWidth: { xs: "100%", md: "80%" }, mx: "auto" }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextField
            margin="dense"
            label="Email Address"
            fullWidth
            type="email"
            variant="filled"
            required
            {...register("email", { required: true })}
          />
          <Box>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              width="50%"
            >
              Add Admin
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default MakeAdmin;

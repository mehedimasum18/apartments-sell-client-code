import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, errors, reset } = useForm();
    const onSubmit = (data) => {
      axios
        .post("/addProduct", data)
        .then((res) => {
          if (res.data.acknowledged) {
            alert("added successfully ");
            reset();
          }
        });
    };
    return (
      <Container>
        <Typography variant="h4" component={Box} sx={{ my: 2 }}>
          Add Product
        </Typography>
        <Paper
          component={Box}
          elevation={4}
          sx={{ minWidth: { xs: "100%", md: "60%" }, mx: "auto" }}
          p={4}
        >
          <Grid
            container
            spacing={2}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid item sx={12} md={6}>
              <TextField
                label="Service Title"
                variant="filled"
                margin="dense"
                type="text"
                fullWidth
                {...register("title", { required: true })}
              />
              <TextField
                label="Service Description"
                variant="filled"
                margin="dense"
                type="text"
                fullWidth
                multiline
                rows={5}
                {...register("desc", { required: true })}
              />
            </Grid>
            <Grid item sx={12} md={6}>
              <TextField
                label="Service Price"
                variant="filled"
                margin="dense"
                type="number"
                fullWidth
                {...register("price", { required: true })}
              />
              <TextField
                label="Service Image url"
                variant="filled"
                margin="dense"
                type="text"
                fullWidth
                {...register("image_url", { required: true })}
              />
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ ml: "auto" }}
            >
              Add Service
            </Button>
          </Grid>
        </Paper>
      </Container>
    );
};

export default AddProduct;
import {
  Box, Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, errors, reset } = useForm();
    const onSubmit = (data) => {
      axios
        .post("https://radiant-wildwood-26012.herokuapp.com/addProduct", data)
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
          elevation={0}
          sx={{ minWidth: { xs: "100%", md: "60%" }, mx: "auto" }}
          p={4}
        >
          <Grid
            container
            spacing={2}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid item sx={12} md={7}>
              <TextField
                label="Service Title"
                variant="outlined"
                margin="dense"
                type="text"
                fullWidth
                {...register("title", { required: true })}
              />

              <TextField
                label="Service Price"
                variant="outlined"
                margin="dense"
                type="number"
                fullWidth
                {...register("price", { required: true })}
              />
              <TextField
                label="Service Image url"
                variant="outlined"
                margin="dense"
                type="text"
                fullWidth
                {...register("image_url", { required: true })}
              />
              <TextField
                label="Service Description"
                variant="outlined"
                margin="dense"
                type="text"
                fullWidth
                multiline
                rows={5}
                {...register("desc", { required: true })}
              />

              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{ ml: "auto", mt:3 }}
              >
                Add Apartment
              </Button>
            </Grid>
          
          </Grid>
        </Paper>
      </Container>
    );
};

export default AddProduct;
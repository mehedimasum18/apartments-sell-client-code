import { Button, Dialog, DialogContent, DialogTitle, Divider, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const PurchaseNow = ({ open, setOpen }) => {
    const { register, handleSubmit, errors, reset } = useForm();
    const { currentUser } = useAuth();

    const handleClose = () => {
      setOpen(false);
    };
    const onSubmit = (data) => {
      data.status = "pending";
      setOpen(false);
      axios.post("/data.json").then((res) => {
        if (res.data.acknowledged) {
          alert("Your Order is Successfully!");
          reset();
        }
      });
    };
    return (
      <>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Purchase </DialogTitle>
          <Divider />
          <DialogContent>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              <TextField
                margin="dense"
                defaultValue={currentUser?.displayName}
                label="Name"
                type="text"
                fullWidth
                variant="standard"
                required
                {...register("name", { required: true })}
              />
              <TextField
                margin="dense"
                defaultValue={currentUser?.email}
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
                required
                {...register("email", { required: true })}
              />
              <TextField
                margin="dense"
                label="Street address"
                type="text"
                fullWidth
                variant="standard"
                required
                {...register("address", { required: true })}
              />
              <TextField
                margin="dense"
                label="Town / City"
                type="text"
                fullWidth
                variant="standard"
                required
                {...register("twon", { required: true })}
              />
              <TextField
                margin="dense"
                label="Phone"
                type="number"
                fullWidth
                variant="standard"
                required
                {...register("phone", { required: true })}
              />
              <Button type="submit" variant="contained" sx={{ mt: 3 }}>
                Purchase
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </>
    );
};

export default PurchaseNow;

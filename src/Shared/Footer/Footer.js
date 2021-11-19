import { Button, Container, Grid, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
    return (
      <Box sx={{ background: "black", color: "#fff", py: 4 }}>
        <Container>
          <Grid container spacing={0}>
            <Grid item xs={12} md={4}>
              <h3 style={{ textAlign: "left", textTransform: "uppercase" }}>
                Join with us
              </h3>
              <ListItem
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FacebookIcon />
                  <ListItemText sx={{ ml: 1 }} primary="Facebook" />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LinkedInIcon />
                  <ListItemText sx={{ ml: 1 }} primary="LinkedIn" />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                 <TwitterIcon/>
                  <ListItemText sx={{ ml: 1 }} primary="Twitter" />
                </Box>
              </ListItem>
            </Grid>
            <Grid item xs={12} md={4}>
              <h3 style={{ textAlign: "left", textTransform: "uppercase" }}>
                Services We Provide
              </h3>
              <ListItem
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ListItemText primary="Best Sells Apartment" />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ListItemText primary="Give your lend" />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ListItemText primary="Booking Now" />
                </Box>
              </ListItem>
            </Grid>
          
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 3, display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="h6"
                  color="initial"
                  sx={{ fontWeight: "bold", color: "#fff" }}
                >
                  SUBSCRIBE NOW
                </Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#fff" }}
                  type="email"
                  margin="dense"
                  label="Your email"
                  variant="filled"
                  color="success"
                />
                <Button
                  variant="contained"
                  color="success"
                  fullWidth
                  sx={{ mt: 1 }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
};

export default Footer;
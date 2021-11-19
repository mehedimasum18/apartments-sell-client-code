import { Button, Container, Grid, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
      <Box sx={{ background: "black", color: "#fff", py: 4 }}>
        <Container>
          <Grid container spacing={0}>
            <Grid item xs={12} md={3}>
              <h3 style={{ textAlign: "left", textTransform: "uppercase" }}>
                Information
              </h3>
              <ListItem  sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }} >
                    
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  
                  <ListItemText primary="Our Team" />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  
                  <ListItemText primary="Clients" />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                 
                  <ListItemText primary="Contacts" />
                </Box>
              </ListItem>
            </Grid>
            <Grid item xs={12} md={3}>
              <h3 style={{ textAlign: "left", textTransform: "uppercase" }}>
                Services
              </h3>
              <ListItem
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  
                  <ListItemText primary="Event Coverage" />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  
                  <ListItemText primary="Property Tours" />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  
                  <ListItemText primary="Multimedia" />
                </Box>
              </ListItem>
            </Grid>
            <Grid item xs={12} md={3}>
              <h3 style={{ textAlign: "left", textTransform: "uppercase" }}>
                Contact Us
              </h3>
              <ListItem
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  
                  <ListItemText primary="Facebook" />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  
                  <ListItemText primary="Twitter" />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  
                  <ListItemText primary="Linkedin" />
                </Box>
              </ListItem>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ p: 3, display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="h6"
                  color="initial"
                  sx={{ fontWeight: "bold", color: "#fff" }}
                >
                  SUBSCRIBE TO NEWSLETTER
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
                <Button variant="contained" fullWidth sx={{ mt: 1 }}>
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
import { Box, Button, Container, Divider, Grid, Typography } from "@mui/material";
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'

const About = () => {

    return (
      <Box>
        <Container>
          <Grid container>
            <Grid item sx={12} md={6}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "600", lineHeight: "50px" }}
              >
                Come Home to Our Prosper Apartments{" "}
              </Typography>
              <Divider
                sx={{
                  width: "100px",
                  height: "4px",
                  my: 3,
                }}
              />
              <Typography
                variant="body"
                sx={{  fontWeight: "400", lineHeight: "30px" }}
              >
                Located in the top-rated Windsong Ranch Elementary district of
                Prosper ISD and near Dallas North Tollway, our Prosper
                apartments for rent offer a world of opportunity, close to home.
                Designer features like granite countertops and modern
                conveniences like private, attached garages will make you proud
                to call any of our one, two, and three-bedroom apartments in
                Prosper, TX home. A quick commute to major employers like Toyota
                and Baylor Medical Center makes your everyday routine a breeze.
                And when you’re considering your weekend plans.
              </Typography>
              <br />
              <Button
                component={Link}
                to="/explore"
                variant="contained"
                color="secondary"
                sx={{ mt: 4, mb: 4 }}
              >
                Our Services
              </Button>
            </Grid>
            <Grid item className="about_img" sx={12} md={6}>
             
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
};

export default About;
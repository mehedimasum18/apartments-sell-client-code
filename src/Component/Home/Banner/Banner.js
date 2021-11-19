import { Button, Container,  Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {

    return (
      <Box className="banner_img">
        <Container sx={{ color: "#fff" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h3" paragraph>
              Choose your dream home.
            </Typography>
            <Typography
              sx={{ fontWeight: "400", lineHeight: "30px" }}
              variant="h6" color="inherit"  component="p" paragraph>
              Each year, teams of design experts, architects, editors, and more
              pore over every last detail of our annual Idea House. <br /> Now
              it's your turn to curate the ultimate abode. Take our quiz to find
              the house of your dreams.
            </Typography>
            <Box className="">
              <Button
                component={Link} variant="contained"
                color="secondary" size="large"  to="/explore" sx={{ mx: 2 }} paragraph >
                Booking Now
              </Button>
              <Button
                component={Link}
                to="/explore" variant="contained" color="secondary"  sx={{ mx: 2 }}
                size="large"  paragraph>
                Explore Now
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    );
};

export default Banner;
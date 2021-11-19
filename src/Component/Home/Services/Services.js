import { Container, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        axios
          .get("http://localhost:5000/apartmentsServices")
          .then((res) => setServices(res.data));
    });
    
    return (
      <Container>
        <Box>
          <Typography variant="h3" sx={{ textAlign: "center", mt: 4 }}>
            Our Services
          </Typography>
          <Divider
            sx={{
              width: "300px",
              height: "4px",
              mx: "auto",
              mt: 2,
            }}
          />
        </Box>
        <Grid container spacing={1} sx={{ mt: 5, mb: 10 }}>
          {services.slice(0, 6).map((service) => (
            <Grid item xs={12} sm={6} md={4} spacing={3} key={service._id}>
              <Service service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
};

export default Services;
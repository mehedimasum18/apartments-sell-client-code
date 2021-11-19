import { Container, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Service from '../../Component/Home/Services/Service/Service';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from "../../Shared/Footer/Footer"
const Explore = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:5000/apartmentsServices")
            .then((res) => setServices(res.data));
        
    })
    return (
        <>

        <Navigation />
        <Container>
          <Grid container spacing={2} sx={{ my: 5 }}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service._id}>
                <Service service={service} />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Footer/>
      </>
    );
};

export default Explore;
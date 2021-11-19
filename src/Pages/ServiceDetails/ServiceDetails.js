import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PurchaseNow from "../../Component/PurchaseNow/PurchaseNow";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";

const ServiceDetails = () => {
  const { id } = useParams();
  console.log(id)
  const [serviceDetail, setServiceDetail] = useState([]);
  const [singleService, setSingleService] = useState({});

  useEffect(() => {
    axios
      .get(`https://radiant-wildwood-26012.herokuapp.com/apartmentsServices`)
      .then((res) => {
        setServiceDetail(res.data);
      });
  }, []);


  useEffect(() => {
    if (serviceDetail.length > 0) {
      const matchData = serviceDetail.find((data) => data.id == id);
      setSingleService(matchData);
    }
  }, [serviceDetail]);

  const { image, Name, Price, description } = singleService;
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Navigation />
      <Container>
        <Grid container spacing={2} sx={{ mt: 4, textAlign: "left" }}>
          <Grid item xs={12} md={9}>
            <Card elevation={0}>
              <CardMedia
                component="img"
                sx={{ height: "500px", mb:5 }}
                image={image}
                alt="drone"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {Name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(34, 45, 53, 0.7)" }}
              >
                {description}
              </Typography>
             
              <Typography variant="h6" color="text.success">
                $ {Price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="lg" variant="outlined" onClick={handleClickOpen}>
                Booking Now
              </Button>
            </CardActions>
          </Grid>
        </Grid>
        <PurchaseNow open={open} setOpen={setOpen} />
      </Container>
      <Footer />
    </>
  );
};

export default ServiceDetails;

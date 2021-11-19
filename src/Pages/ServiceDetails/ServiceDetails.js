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
  const { serviceId } = useParams();
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
      const matchData = serviceDetail.find((data) => data._id == serviceId);
      setSingleService(matchData);
    }
  }, [serviceDetail]);

  const { image, Name, size, description } = singleService;
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
                sx={{ height: "500px" }}
                image={image}
                alt="drone"
              />
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
                  $ {size}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="lg" variant="contained" onClick={handleClickOpen}>
                  Buy now
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                p: 3,
                background: "#F5F5F5",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h6"
                color="initial"
                sx={{ fontWeight: "bold" }}
              >
                SUBSCRIBE TO NEWSLETTER
              </Typography>
              <TextField
                fullWidth
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
        <PurchaseNow open={open} setOpen={setOpen} />
      </Container>
      <Footer />
    </>
  );
};

export default ServiceDetails;

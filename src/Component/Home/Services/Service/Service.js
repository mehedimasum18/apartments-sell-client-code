import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useHistory } from 'react-router';


const useStyles = makeStyles({
  root: {
    background: "#fff",
  },
});

const Service = ({ service }) => {
    const styleClass = useStyles();
  const { id, Name, Location, description, size, badroom, image } = service;
  const history = useHistory();
    const handleDetails = (id) => {
        history.push(`/service/${id}`);
    }
    return (
      <Card
        sx={{ maxWidth: 345, textAlign: "left" }}
        className={styleClass.root}>
        <CardMedia component="img" height="200" image={image} alt="drone" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
           Location: {Location}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
           Bad Room: {badroom}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#7e8285", fontSize: "14px",  lineHeight: "25px",  mb: 2, }}>
            {description.slice(1, 80)}
          </Typography>
          <Typography variant="subtitle2" color="text.success">
           Floor Size: {size}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="lg" fullWidth variant="contained" onClick={() => handleDetails(id)} >
            Details </Button>
        </CardActions>
      </Card>
    );
};

export default Service;
import { Avatar, Card, CardContent, Container, Divider, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Review = () => {
      const [userReview, setUserReview] = useState([]);
      useEffect(() => {
        axios
          .get(
            `https://radiant-wildwood-26012.herokuapp.com/review`)
          .then((res) => {
            setUserReview(res.data);
          });
      }, []);
    
    return (
      <Box sx={{ py: 10 }}>
        <Container>
          <Box>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              client Review
            </Typography>
            
          </Box>
          <Grid container spacing={1} sx={{ my: 5 }}>
            {userReview.map((review) => (
              <Grid item xs={12} sm={6} md={4} key={review._id}>
                <Card
                  sx={{
                    maxWidth: 345,
                    textAlign: "left",
                    background: "rgba(255,255,255,0.8)",
                    p: 3,
                  }}
                  elevation={0}
                >
                  <Rating defaultValue={review.rating} size="large" readOnly />
                  <CardContent component="div">
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: "15px",
                        lineHeight: "25px",
                        fontWeight: "400",
                        color: "#6f6f6f",
                        mb: 2,
                      }}
                    >
                      {review.reviewText.slice(0, 100)}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      {review?.photo ? (
                        <Avatar
                          sx={{ width: 40, height: 40, mr: 1 }}
                          src={review?.photo}
                        />
                      ) : (
                        <>
                          <Avatar sx={{ width: 40, height: 40, mr: 1 }} />
                        </>
                      )}
                      <Box>
                        <Typography gutterBottom variant="h6" sx={{ mb: 0 }}>
                          {review.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "12px",
                            fontWeight: "400",
                            color: "#4e4e4e",
                          }}
                        >
                          {review.position || "CEO"}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    );
};

export default Review;
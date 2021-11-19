import {Box, Button, Container, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { TableCell, tableCellClasses } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#4e4e4e",
    color: "#fff",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: theme?.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ManagesAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isDelete, setIsDelete] = useState(null);

    useEffect(() => {
      axios
        .get(`https://radiant-wildwood-26012.herokuapp.com/orders`)
        .then((res) => {
          const data = res.data;
          setOrders(data);
        });
    }, [isDelete]);

    // update status
    const handleStatus = (id) => {
      if (window.confirm("Are you update this status?")) {
        const matchData = orders.find((order) => order._id === id);
        axios
          .put(
            `https://radiant-wildwood-26012.herokuapp.com/orders/${id}`,
            matchData).then((res) => {
            if (res.data.modifiedCount) {
              alert("successfully update status");
              setIsDelete(true);
            } else {
              setIsDelete(false);
            }
          });
      }
    };
    return (
      <>
        <Container>
          <Typography variant="h4" component={Box} sx={{ my: 2 }}>
            Manage Apartment Booking 
          </Typography>
          <TableContainer>
            <Table
              sx={{ minWidth: { xs: "auto", md: 700 } }}
              arial-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Name</StyledTableCell>
                  <StyledTableCell align="left">Email ID</StyledTableCell>
                  <StyledTableCell align="left">Address</StyledTableCell>
                  <StyledTableCell align="left">Phone</StyledTableCell>
                  <StyledTableCell align="left">Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <StyledTableRow key={order._id}>
                    <StyledTableCell component="th" scope="row">
                      {order.name}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {order.email}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {order.address}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {order.phone}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Button
                        variant="contained"
                        color={
                          order.status == "pending" ? "warning" : "success"
                        }
                        onClick={() => handleStatus(order._id)}
                      >
                        {order.status}
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </>
    );
};

export default ManagesAllOrders;
import React from 'react';
import Fab from "@mui/material/Fab";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import { TableCell, tableCellClasses } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const UserOrder = () => {
    const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
    useEffect(() => {
        
      axios
        .get("https://radiant-wildwood-26012.herokuapp.com/orders")
        .then((res) => {
          const data = res.data;
          const matchData = data.filter((dt) => dt?.email == currentUser.email);
          setOrders(matchData);
        });
    }, [isDelete]);
    
    
      const handleDelete = (id) => {
        if (window.confirm("Are you sure delete this item?")) {
          axios
            .delete(`https://radiant-wildwood-26012.herokuapp.com/orders/${id}`)
            .then((res) => {
              if (res.data.deletedCount) {
                alert("Deleted successfully");
                setIsDelete(true);
              }
            });
        }
      };

    return (
      <Container>
        <Typography variant="h4" component={Box} sx={{ my: 2 }}>
          My Order
        </Typography>

        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: { xs: "auto", md: 700 } }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Email ID</StyledTableCell>
                <StyledTableCell align="left">Address</StyledTableCell>
                <StyledTableCell align="left">Phone</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="left">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <StyledTableRow key={order._id}>
                  <StyledTableCell component="th" scope="row">
                    {order.name}
                  </StyledTableCell>
                  <StyledTableCell align="left">{order.email}</StyledTableCell>
                  <StyledTableCell align="left">
                    {order.address}
                  </StyledTableCell>
                  <StyledTableCell align="left">{order.phone}</StyledTableCell>
                  <StyledTableCell align="left">
                    <Button
                      variant="contained"
                      color={order.status === "pending" ? "warning" : "success"}
                    >
                      {order.status}
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Fab
                      size="small"
                      style={{ color: "red", background: "#fff" }}
                      sx={{ mr: 1 }}
                      onClick={() => handleDelete(order._id)}
                    >
                      Delete 
                    </Fab>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
};

export default UserOrder;
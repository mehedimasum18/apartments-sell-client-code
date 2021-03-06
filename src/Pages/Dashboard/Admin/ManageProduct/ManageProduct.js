import {
  Box,Container,
  Fab,
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from '@mui/styles';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#000",
    color: "#fff",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ManageProduct = () => {
      const [allProducts, setAllProducts] = useState([]);
      const [isDelete, setIsDelete] = useState(false);
      useEffect(() => {
        axios
          .get(
            "https://radiant-wildwood-26012.herokuapp.com/apartmentsServices"
          )
          .then((res) => {
            const data = res.data;
            setAllProducts(data);
          });
      }, [isDelete]);
      const handleDelete = (id) => {
        if (window.confirm("Are your sure delete this item?")) {
          axios
            .delete(
              `https://radiant-wildwood-26012.herokuapp.com/apartmentsServices/${id}`
            )
            .then((res) => {
              if (res.data.deletedCount) {
                alert("Successfully delete your item");
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
            Manage Product
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "auto" }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Name</StyledTableCell>
                  <StyledTableCell align="left">Description</StyledTableCell>
                  <StyledTableCell align="left">Price</StyledTableCell>
                  <StyledTableCell align="left">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allProducts.map((products) => (
                  <>
                    <StyledTableRow key={products._id} key={products._id}>
                      <StyledTableCell component="th" scope="row">
                        {products.Name}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {products.description}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        ${products.Price}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Fab
                          style={{ color: "red", background: "#fff" }}
                          sx={{ mr: 1 }}
                          onClick={() => handleDelete(products._id)}
                        >
                          Delete
                        </Fab>
                      </StyledTableCell>
                    </StyledTableRow>
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </>
    );
};

export default ManageProduct;
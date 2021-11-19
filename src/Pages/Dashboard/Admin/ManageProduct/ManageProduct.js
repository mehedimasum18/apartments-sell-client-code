import { Container, Fab, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';



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

const ManageProduct = () => {
      const [allProducts, setAllProducts] = useState([]);
      const [isDelete, setIsDelete] = useState(false);
      useEffect(() => {
        axios
          .get("addServices")
          .then((res) => {
            const data = res.data;
            setAllProducts(data);
          });
      }, [isDelete]);
      const handleDelete = (id) => {
        if (window.confirm("Are your sure delete this item?")) {
          axios
            .delete(
              `addServices/${id}`
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
                        {products.title}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {products.desc.slice(0, 130)}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        ${products.price}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Fab
                          size="small"
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
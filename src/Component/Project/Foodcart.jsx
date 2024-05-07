import React, { useState } from "react";
import Layout from "./Layout";
import Modal from "./Modal";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Data from "./Data";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Foodcart = () => {
  const myState = useSelector((state) => state.quantityHandler);
  var totalPrice = 0;
  for (let index = 0; index < myState.length; index++) {
    totalPrice = totalPrice + Data[index].price * myState[index];
    
  }
  var index = 0;
  
  return (
    <Layout>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>SN</TableCell>
                <TableCell>Menu</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myState.map((qty, i) => {
                return qty > 0 ? (
                  <TableRow>
                    <TableCell>{index = index + 1}</TableCell>
                    <TableCell>{Data[i].name}</TableCell>
                    <TableCell>{qty}</TableCell>
                    <TableCell>{Data[i].price * qty}</TableCell>
                  </TableRow>
                ) : (
                  ""
                );
              })}

              <TableRow>
                <TableCell>{}</TableCell>
                <TableCell>{}</TableCell>
                <TableCell>Total Price</TableCell>
                <TableCell>{totalPrice}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{}</TableCell>
                <TableCell>{}</TableCell>
                 
                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Go For Payment
            </button>
                
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <div class="modal fade mt-5" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header ">
            <h1 class="modal-title fs-5" id="staticBackdropLabel"></h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body bgcolor-red">
          <h2> Payment Suceesfully Submited</h2>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Foodcart;

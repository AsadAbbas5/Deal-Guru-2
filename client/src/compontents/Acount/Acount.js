import { Box, Button, TableCell, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ActiontTpes } from "../store/action/actiontypes";
import axios from "axios";
import { ProductAction } from "../store/action/ProductAction";
import ShowProduct from "./showProduct/ShowProduct";
import AddProducts from "../AddProduct/AddProducts";

function Acount() {
  const userName = useSelector((state) => state.auth.user.userName);
  const dispatch = useDispatch();


  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Welcome: {userName}
        </p>
       
      </div>
      <AddProducts />
      <ShowProduct />
    </div>
  );
}

export default Acount;

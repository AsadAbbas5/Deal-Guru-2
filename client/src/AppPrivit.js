import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Acount from "./compontents/Acount/Acount";
import ShowProduct from "./compontents/Acount/showProduct/ShowProduct";
import SinglelProduct from "./compontents/Acount/showProduct/SinglelProduct";
import Home from "./compontents/Home/Home";
function AppPrivit() {
  return (
    <Box>
      <Box>
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/Acount/Add/Show" Component={Acount}/>
          <Route path="/products/:id" Component={SinglelProduct} />
        </Routes>
      </Box>
    </Box>
  );
}
export default AppPrivit;

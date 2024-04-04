import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Signin from "./compontents/signin/Signin";
import SignUp from "./compontents/Signup/Signup";
import Home from "./compontents/Home/Home";
import NaveBar2 from "./compontents/laibaray/NavBar2";

function AppPublic() {
  return (
    <Box>
       <NaveBar2/>
      <Routes>
        
      <Route path="/" Component={Home} />
        <Route path="/signin" Component={Signin} />
        <Route path="/signup" Component={SignUp} />
      </Routes>
    </Box>
  );
}

export default AppPublic;

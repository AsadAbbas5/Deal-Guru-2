// import SignUp from './compontents/Signup/Signup';

import { connect } from "react-redux";
import AppPrivit from "./AppPrivit";
import AppPublic from "./AppPublic";
import NavBar from "./compontents/laibaray/NavBar";
import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import { loadProfile } from "./compontents/store/action/actiontypes";
import { loadProducts } from "./compontents/store/action/ProductAction";
import NavBar2 from "./compontents/laibaray/NavBar2";
function App({ isLogin, loadProfile,loadProducts}) {
  useEffect(() => {
    loadProfile();
    loadProducts()
  }, []);
  return (
    <div className="App">
      <NavBar />
     
      <Box>{!isLogin ? <AppPublic /> : <AppPrivit />}</Box>
    </div>
  );
}
const mapStateProps = (state) => {
  return {
    isLogin: state.auth.isLogin,
  };
};
export default connect(mapStateProps, { loadProfile,loadProducts })(App);

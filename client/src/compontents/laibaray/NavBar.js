import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import style from "./navebar.module.css";
import { connect, useDispatch } from "react-redux";
import { ActiontTpes } from "../store/action/actiontypes";

function NavBar({isLogin}) {
  console.log(isLogin,"isLogined")
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: ActiontTpes.LOG_OUT });
    localStorage.removeItem("token");
  };
  return (
    <Box>
      <Box
        bgcolor={"#088f8f"}
        borderBottom="1px solid white"
        p={3}
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Box>
          <Typography
            sx={{ color: "#fff", letterSpacing: "5px" }}
            fontSize="2rem"
          >
            Deal Guru
          </Typography>
        </Box>
                
        
        <TextField
          sx={{
            alignContent: "start",
            width: "50%",
            bgcolor: "#ffffff",
            borderRadius: "10px",
          }}
          placeholder="Search"
          label="search "
          type="search"
        />
        <Box>

          
        
         {
          !isLogin?
          <>
        
        <Link to={"/"} className={style.link}>
           Home
         </Link>
         <Link to={"/signin"} className={style.link}>
           Sign in
         </Link>

         <Link to={"/signup"} className={style.link}>
           Register
         </Link>
         </>
            :

            <>
              
            <Link to={"/"} style={{ textDecoration: "none" }}>
            <Button
              onClick={logout}
              variant="contained"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                paddingX: "1.5rem",
                paddingY: "0.5rem",
                fontSize: "1rem",
                marginTop: "1.2rem",
                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.5)",
                "&:hover": {
                  color: "white",
                  backgroundColor: "blue",
                },
              }}
            >
              Log Out
            </Button>
          </Link>
         
          </>
          

        

         }
        </Box>
      </Box>
    </Box>
  );
}

const mapStateToPropes = (state) => {
  return {
    isLogin: state.auth.isLogin,
  };
};

export default connect(mapStateToPropes)(NavBar);

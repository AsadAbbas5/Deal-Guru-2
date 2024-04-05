import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ActiontTpes } from "../store/action/actiontypes";

function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState();
  const Signin = () => {
    if (!email || !password) {
      alert("Fill in all the fields");
    } else {
      const data = {
        email: email,
        password: password,
      };
      axios
        .post("api/user/signin", data)
        .then((res) => {
          dispatch({ type: ActiontTpes.SIGN_IN, data: res.data });
          localStorage.setItem("token", res.data.token);
          setUsername(res.data.user.username);
          navigate("/Acount/Add/Show");
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            setError("Email or password is incorrect");
          } else {
            setError("An error occurred. Please try again later.");
          }
        });
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="4rem"
    >
      <Box
        bgcolor={"#fff"}
        boxShadow={5}
        padding={"4rem"}
        borderRadius={"1rem"}
      >
        <Box textAlign={"center"}>
          <Avatar sx={{ margin: "0 auto 1rem" }} />
          <Typography fontWeight={800} fontSize={"1.5rem"}>
            Sign In
          </Typography>
        </Box>
        <Box margin={"1rem 0"}>
          <TextField
            sx={{ marginTop: "1rem" }}
            fullWidth
            size="small"
            label="Enter Your Email.."
            placeholder="Enter Your Email"
            value={email}
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Box>
        <Box margin={"1rem 0"} marginTop={"1rem"}>
          <TextField
            fullWidth
            size="small"
            label="Enter Your Password"
            placeholder="Enter Your Password..."
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            InputProps={{}}
          />
        </Box>
        <Box textAlign={"center"} marginTop={"1rem"}>
          <Button variant="contained" fullWidth onClick={Signin}>
            Sign In
          </Button>
          <Typography marginTop={"1rem"}>
            create Account.... <Link to={"/signup"}>Sign Up</Link>
          </Typography>
        </Box>
       
      </Box>
    </Box>
  );
}

export default Signin;

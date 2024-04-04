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
import { Link } from "react-router-dom";

function SignUp() {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
    if (!userName || !email || !password) {
      alert("Fill in all the fields");
    } else {
      const data = {
        userName,
        email: email,
        password: password,
      };
      axios
        .post("http://localhost:5000/api/user/signup", data)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    }
  };

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      marginTop={"2rem"}
    >
      <Box
        bgcolor={"#fff"}
        width="20rem"
        padding={"2rem"}
        borderRadius="1rem"
        boxShadow={5}
      >
        <Box marginTop={"6rem"} textAlign={"center"}>
          <Avatar sx={{ marginLeft: "9rem" }} />
          <br />
          <Typography fontSize={"2rem"} fontWeight={600}>
            SignUp
          </Typography>
        </Box>
        <Box>
          <TextField
            placeholder="Enter Your Name..."
            label="Name"
            variant="standard"
            size="small"
            type="name"
            fullWidth
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
          />
        </Box>
        <Box margin={"1rem 0"}>
          <TextField
            placeholder="Enter Your Email..."
            label="Email"
            variant="standard"
            size="small"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box margin={"1rem 0"}>
          <TextField
            placeholder="Enter Your Password..."
            label="Password"
            variant="standard"
            size="small"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ m: 1, position: "relative", marginLeft: "7rem" }}>
              <Button onClick={signup} variant="contained">
                Sign Up
              </Button>
              <Typography>create acount..?</Typography>

              <Box marginTop={"1rem"}>
                <Typography color={"blue"} marginRight={"2rem"}>
                  alreaday have  ...?
                </Typography>
                <Link to={"/signin"}>Sign In</Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUp;

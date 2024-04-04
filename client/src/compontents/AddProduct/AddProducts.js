import { Alert, Box, Button, Snackbar, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";
import { ProductAction } from "../store/action/ProductAction";
import { connect, useDispatch } from "react-redux";
function AddProducts() {
  const dispatch = useDispatch();
  const [ProductTitle, setProductTitle] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('/path/to/default/avata.jpg');
const [open,setOpen] = useState(null)
  const handleFileChange = (e) => {
  setProductImage(e.target.files[0]);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const ProductDetails = () => {
    if (!ProductTitle || !productPrice) {
      alert("Fill Your All Feild");
    } else {
      const data = {
        ProductTitle,
        productPrice,
        productImage,
      };

       const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
      setOpen(false);
    }}
      axios
        .postForm("/api/products/AddProduct", data)
        .then((res) => {
          dispatch({
            type: ProductAction.ADD_PRODUCT,
            product: res.data.product,
          });
          setOpen(true)
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          style={{
            position: "fixed",
            top: "7rem",
            left: "75%",
            transform: "translateX(-50%)",
          }}
        >
          <Typography>Add Product Successfully</Typography>
        </Alert>
      </Snackbar>
      <Box marginLeft={"2rem"}>
        <Typography fontSize={"2rem"} fontWeight={"800"} color={"blue"}>
          Add Product
        </Typography>
      </Box>
      <Box display={"flex"} flexDirection={"column"}>
        <Box display={"flex"} marginTop={"2rem"}>
          <TextField
            onChange={(event) => setProductTitle(event.target.value)}
            value={ProductTitle}
            placeholder="Enter your Product Title"
            label="Product Title"
            type="name"
            sx={{
              width: "40%",
              backgroundColor: "#f2f3f4",
              borderRadius: "10%",
              marginLeft: "2rem",
            }}
            size="medium"
            autoFocus
          />
          <Box marginLeft="2rem">
            <Box marginLeft="2rem">
              <TextField
                inputProps={{ accept: "image/*" }}
                onChange={handleFileChange}
                type="file"
                sx={{
                  width: "200%",
                  backgroundColor: "#f2f3f4",
                  borderRadius: "10%",
                }}
                size="medium"
              />
            </Box>
          </Box>
        </Box>
        <Box display={"flex"} marginTop={"2rem"}>
          <Box>
            <TextField
              value={productPrice}
              onChange={(event) => setProductPrice(event.target.value)}
              placeholder="Enter your Product Price"
              label="Product Price"
              type="number"
              size="medium"
              sx={{
                width: "225%",
                backgroundColor: "#f2f3f4",
                borderRadius: "10%",
                marginLeft: "2rem",
              }}
            />
          </Box>
        </Box>
        <Box textAlign={"center"} marginTop={"2rem"}>
          <Button
            variant="contained"
            onClick={ProductDetails}
            sx={{ fontSize: "1.5rem", fontWeight: "700" }}
          >
            Add Product
          </Button>
        </Box>
        <Typography borderBottom={"2px solid gray"} marginTop={'1rem'}></Typography>
      </Box>
     
    </div>
  );
}

export default AddProducts;

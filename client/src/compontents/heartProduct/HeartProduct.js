import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ProductAction } from "../store/action/ProductAction";

function HeartProduct({ productId }) {
  const dispatch = useDispatch();
  const [heartColor, setHeartColor] = useState("inherit");

  const handleHeartClick = async () => {
    try {
      await axios.post("/api/products/hearts", { productId }).then((res) => {
        dispatch({
          type: ProductAction.HEART_PRODUCT,
          product: res.data.product,
        });
        
        setHeartColor("red");
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      <IconButton onClick={handleHeartClick} style={{ color: heartColor }}>
        <FavoriteIcon />
      </IconButton>
    </Box>
  );
}

export default HeartProduct;

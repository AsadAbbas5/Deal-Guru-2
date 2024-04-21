import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import axios from "axios";
import { connect, useDispatch } from "react-redux";
import { ProductAction } from "../store/action/ProductAction";

function LikeProduct({ productId }) {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);

  const handleLikeClick = async () => {
    try {
      await axios.post("/api/products/likes", { productId }).then((res) => {
        dispatch({
          type: ProductAction.LIKE_PRODUCT,
          product: res.data.product,
        });
        setLiked(true); 
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      <IconButton onClick={handleLikeClick} color={liked ? "primary" : "black"}>
        <ThumbUpIcon />
      </IconButton>
    </Box>
  );
}

export default LikeProduct;

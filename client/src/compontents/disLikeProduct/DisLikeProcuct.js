import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ProductAction } from "../store/action/ProductAction";

function DisLikeProducts({ productId }) {
  const dispatch = useDispatch();
  const [dislikeColor, setDislikeColor] = useState("inherit");

  const handleDislikeClick = async () => {
    try {
      await axios.post("/api/products/dislike", { productId }).then((res) => {
        dispatch({
          type: ProductAction.DISLIKE_PRODUCT,
          product: res.data.product,
        });
        // Change dislike color to red
        setDislikeColor("red");
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      <IconButton onClick={handleDislikeClick} style={{ color: dislikeColor }}>
        <ThumbDownAltIcon />
      </IconButton>
    </Box>
  );
}

export default DisLikeProducts;

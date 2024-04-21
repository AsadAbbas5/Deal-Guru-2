import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function SingleProduct() {
  const products = useSelector((state) => state.product.product);
  
  const { id } = useParams();
  const product = products.find((product) => product._id === id);

  if (!product) {
    return <div style={{fontSize:"2rem"}}>Loading...</div>;
  }

  return (
    <Card style={{ maxWidth: 300, margin: "auto", marginTop: '4rem' }}>
      <CardMedia
        component="img"
        image={process.env.REACT_APP_BASE_URL + "content/product/" + product.productImage}
        alt={product.ProductTitle}
        style={{ height: 300, objectFit: "cover" }}
      />
      <CardContent>
      <Typography variant="h5" component="p" align="center" color="secondary" fontWeight="bold" gutterBottom>
         {product.ProductTitle}
        </Typography>
         
        <Typography variant="h5" component="p" align="center" color="secondary" fontWeight="bold" gutterBottom>
          ${product.productPrice}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SingleProduct;

import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { connect } from "react-redux";
import NoProduct from "../../NOproduct/NoProduct";
import { Link } from "react-router-dom";
import { useState } from 'react';

function ShowProduct({ product }) {
  console.log(product.productImage,"checking product")
  const [hovered, setHovered] = useState(null);

  const handleHover = (index) => {
    setHovered(index);
  };

  const handleLeave = () => {
    setHovered(null);
  };

  return (
    <>
      {product && product.length > 0 ? (
        <Grid container spacing={3}>
          {product.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={product._id}>
              <Card
                sx={{
                  maxWidth: 300,
                  margin: "auto",
                  marginTop: "5rem",
                  transition: "transform 0.3s",
                  transform: hovered === index ? "scale(1.05)" : "scale(1)",
                }}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleLeave}
              >
                <Link to={`/products/${product._id}`}>
                  <CardMedia
                    component="img"
                    image={process.env.REACT_APP_BASE_URL + "content/product/" + product.productImage}
                    alt={product.ProductTitle}
                    sx={{ height: 350, objectFit: "cover" }}
                  />
                </Link>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="p"
                    align="center"
                    color="secondary"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                      fontSize: hovered === index ? "1.2rem" : "1rem",
                      transition: "font-size 0.3s",
                    }}
                  >
                  {product.ProductTitle}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="p"
                    align="center"
                    color="secondary"
                    fontWeight="bold"
                    gutterBottom
                  >
                 ${product.productPrice}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <NoProduct />
      )}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    product: state.product.product,
  };
};

export default connect(mapStateToProps)(ShowProduct);

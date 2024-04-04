import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { connect } from "react-redux";

function DealGureCard({ product }) {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "1rem",
          fontSize: "3rem",
          color: "blue",
        }}
      >
        Featured Products
      </h1>

      {product && product.length > 0 ? (
        <Grid container spacing={3} justifyContent="center">
          {product.map((productItem) => (
            <Grid item xs={12} sm={6} md={4} key={productItem._id}>
              <Card
                sx={{
                  maxWidth: 300,
                  margin: "auto",
                  marginTop: "5rem",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={
                    process.env.REACT_APP_BASE_URL +
                    "content/product/" +
                    productItem.productImage
                  }
                  alt={productItem.ProductTitle}
                  sx={{ height: 350, objectFit: "cover" }}
                />

                <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    color="primary"
                    gutterBottom
                  >
                    {productItem.ProductTitle}
                  </Typography>

                  {/* Product Price */}
                  <Typography
                    variant="h5"
                    align="center"
                    color="secondary"
                    fontWeight="bold"
                  >
                    ${productItem.productPrice}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" align="center" color="textSecondary">
          No products available
        </Typography>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    product: state.product.product,
  };
};

export default connect(mapStateToProps)(DealGureCard);

import React, { Fragment, useEffect, useState } from "react";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import useStyles from "./styles";
import Header from "../Layouts/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../actions/productActions";
import { addProductToCart } from "../../actions/cartActions";

const ProductDetails = () => {
  const classes = useStyles();
  const [qty, setQty] = useState(1);

  const { error, loading, product } = useSelector(
    (state) => state.productDetails
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();

  const handlePlaceOrder = () => {
    navigate("/checkout");
  };

  // const product = products.find((p) => p._id === id);

  useEffect(() => {
    if (error) {
    }
    dispatch(getProductDetails(params.id));
  }, [dispatch, params.id, error]);

  const addToCart = () => {
    dispatch(addProductToCart(params.id, qty));
  };

  return (
    <Fragment>
      <CssBaseline />
      <Header />
      {loading ? (
        <div>Loading</div>
      ) : (
        <Box sx={{ m: 2 }}>
          <Grid container spacing={2}>
            <Grid className={classes} item xs="12" sm="5">
              <ImageList cols={1}>
                <ImageListItem>
                  <img src={product.image} alt={product.name} />
                </ImageListItem>
              </ImageList>
            </Grid>
            <Grid item xs="12" sm="4">
              <Typography variant="h5">{product.name}</Typography>
              <Typography gutterBottom variant="body2">
                Product # {product._id}
              </Typography>
              <Typography variant="h6">KSh. {product.price}</Typography>
              <Typography
                gutterBottom
                sx={{ mb: 1.5 }}
                color={product.stock > 0 ? "green" : "red"}
                variant="h6"
              >
                {product.stock > 0 ? "In Stock" : "Unavailable"}
              </Typography>
              <div />
              <TextField
                sx={{ mb: 1, width: 80 }}
                label="Qty"
                width="20px"
                gutterBottom
                select
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              >
                {[...Array(product.stock).keys()].map((stock) => (
                  <MenuItem key={stock + 1} value={stock + 1}>
                    {stock + 1}
                  </MenuItem>
                ))}
              </TextField>
              <div>
                <Button
                  color="info"
                  sx={{ mr: 1, mb: 1.5, height: 0.1 }}
                  variant="contained"
                  disabled={product.stock === 0}
                  onClick={addToCart}
                >
                  Add to Cart
                </Button>
                {/* <Button
                  onClick={handlePlaceOrder}
                  sx={{ mb: 1.5 }}
                  variant="contained"
                >
                  Place order
                </Button> */}
              </div>

              <Typography gutterBottom variant="body1">
                Sold by: {product.seller}
              </Typography>
              <div />
              <Typography sx={{ mt: 3 }} variant="">
                Description:
              </Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Grid>
            <Grid item xs="12" sm="3">
              <Paper
                sx={{
                  padding: 2,
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                }}
                variant="outlined"
              >
                <Typography sx={{ mb: 1, textAlign: "center" }} variant="h6">
                  Summary
                </Typography>

                <List disablePadding>
                  {product.stock > 0 ? (
                    <Fragment>
                      <ListItem sx={{ py: 1, px: 1 }}>
                        <ListItemText primary="Quantity" secondary="" />
                        <Typography variant="h6">{qty} unit(s)</Typography>
                      </ListItem>
                      <ListItem sx={{ py: 1, px: 1 }}>
                        <ListItemText
                          primary="Total Price (Ksh.)"
                          secondary=""
                        />
                        <Typography variant="h6" sx={{ color: "#be0000" }}>
                          {(qty * product.price).toLocaleString(
                            navigator.language,
                            { minimumFractionDigits: 2 }
                          )}
                        </Typography>
                      </ListItem>
                    </Fragment>
                  ) : (
                    <ListItem sx={{ py: 1, px: 1 }}>
                      <ListItemText
                        primary="The product is currently unavailable"
                        secondary=""
                      />
                      {/* <Typography variant="h6" sx={{ color: "#be0000" }}>
                        {qty * product.price}
                      </Typography> */}
                    </ListItem>
                  )}
                </List>
                <Button
                  onClick={handlePlaceOrder}
                  sx={{ mb: 1, py: 1, px: 1 }}
                  variant="contained"
                  disabled={product.stock === 0}
                >
                  Place order
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      )}
    </Fragment>
  );
};

export default ProductDetails;

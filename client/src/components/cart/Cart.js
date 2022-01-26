import React, { Fragment, useEffect } from "react";
import {
  Button,
  CssBaseline,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
  Link,
  MenuItem,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Layouts/Header";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../actions/cartActions";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addProductToCart());
  }, [dispatch]);

  const removeCartItemHandler = (id) => {
    dispatch(removeProductFromCart(id));
  };

  return (
    <Fragment>
      <CssBaseline />
      <Header />
      {cartItems.length === 0 ? (
        <Typography sx={{ marginTop: 2, marginLeft: 3 }} variant="h5">
          Your cart is empty.{" "}
          <Link sx={{ textDecoration: "none" }} href="/">
            Go shopping
          </Link>
        </Typography>
      ) : (
        <Fragment>
          <Typography sx={{ marginTop: 2, marginLeft: 3 }} variant="h5">
            Your cart: {cartItems.length} item(s)
          </Typography>
          <Box
            sx={{
              margin: { xs: 2, sm: 3 },
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs="12" sm="8">
                <Paper
                  sx={{
                    p: 2,
                    // { xs: 2, md: 3 },
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {cartItems.map((item) => (
                    <Fragment>
                      <Grid
                        item
                        key={item._id}
                        container
                        style={{ marginTop: 15 }}
                      >
                        <Grid item sm="1.5">
                          <img src={item.image} height="50px" alt="" />
                        </Grid>
                        <Grid item sm="5">
                          <Typography component="h1" variant="body1">
                            <Link sx={{ textDecoration: "none" }} href="/">
                              {item.name}
                            </Link>
                          </Typography>
                        </Grid>
                        <Grid item sm="2">
                          <Typography variant="h6">
                            Ksh. {item.price.toLocaleString()}
                          </Typography>
                        </Grid>
                        <Grid item sm="2">
                          <TextField
                            select
                            value={item.qty}
                            sx={{ width: 70 }}
                            label="Qty"
                          >
                            {[...Array(item.stock).keys()].map((x) => (
                              <MenuItem key={x + 1} value={x + 1}>
                                {x + 1}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid item sm="1.5">
                          <Button
                            onClick={() => removeCartItemHandler(item.product)}
                            sx={{ color: "red" }}
                          >
                            Delete
                          </Button>
                        </Grid>
                      </Grid>
                    </Fragment>
                  ))}
                </Paper>
              </Grid>

              <Grid item xs="12" sm="4">
                <Paper sx={{ padding: 2 }}>
                  <Typography sx={{ textAlign: "center" }} variant="h6">
                    Order Summary
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText>Sub Total:</ListItemText>
                      <Typography component="h1" variant="h6">
                        {cartItems.reduce((a, c) => a + c.qty, 0)} {""}
                        (units)
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <ListItemText>Est Total:</ListItemText>
                      <Typography component="h1" variant="h6">
                        Ksh.{" "}
                        {cartItems
                          .reduce((a, c) => a + c.qty * c.price, 0)
                          .toLocaleString(navigator.language, {
                            minimumFractionDigits: 2,
                          })}
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Link href="/checkout">
                        <Button variant="contained" fullWidth>
                          Checkout
                        </Button>
                      </Link>
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;

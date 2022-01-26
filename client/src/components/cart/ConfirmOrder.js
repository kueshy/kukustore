import React, { Fragment } from "react";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

const ConfirmOrder = () => {
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs="12" sm="8">
          <Paper
            variant="outlined"
            sx={{
              ml: { xs: 3, md: 10 },
              my: { xs: 1, md: 1 },
              p: { xs: 2, md: 3 },
            }}
          >
            <Typography variant="h6">Confirm Order</Typography>
            <List>
              <Typography style={{ fontSize: 18 }}>Shipping info</Typography>
              <ListItem
                sx={{
                  dispay: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                }}
              >
                <Typography>Address</Typography>
                <Typography>Phone Number</Typography>
                <Typography>City</Typography>
                <Typography>Region</Typography>
                <Typography>Postal code</Typography>
                <Typography>Country</Typography>
              </ListItem>
              <Typography style={{ fontSize: 18 }}>Item(s)</Typography>
            </List>
            <Grid container spacing={2}>
              <Grid item xs="12" sm="2">
                <img
                  src="https://m.media-amazon.com/images/I/61Ai0XyGe1L._AC_UL320_.jpg"
                  height="45px"
                  style={{ marginRight: "20px" }}
                  alt=""
                />
              </Grid>
              <Grid item xs="12" sm="6">
                <typography>
                  Lorem ipsum dolor sit amet, consectetur hey kush kk
                  adipisicing elit. Aliquid, cum.
                </typography>
              </Grid>
              <Grid item xs="12" sm="4">
                <Typography>55*1500 = 267500</Typography>
              </Grid>
              <Grid item xs="12" sm="2">
                <img
                  src="https://m.media-amazon.com/images/I/61Ai0XyGe1L._AC_UL320_.jpg"
                  height="45px"
                  style={{ marginRight: "20px" }}
                  alt=""
                />
              </Grid>
              <Grid item sm="6">
                <typography>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, cum.
                </typography>
              </Grid>
              <Grid item sm="4">
                <Typography>55*1500 = 267500</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs="12" sm="4">
          <Paper
            variant="outlined"
            sx={{
              mr: { md: 10 },
              ml: { xs: 3 },
              my: { xs: 1, md: 1 },
              p: { xs: 2, md: 2 },
            }}
          >
            <Typography align="center" variant="h6">
              Order Summary
            </Typography>
            <List>
              <ListItem>
                <ListItemText>Subtotal</ListItemText>
                <Typography>Ksh. 20,000</Typography>
              </ListItem>
              <ListItem>
                <ListItemText>Shipping</ListItemText>
                <Typography>Ksh. 20,000</Typography>
              </ListItem>
              <ListItem>
                <ListItemText>Tax</ListItemText>
                <Typography>Ksh. 20,000</Typography>
              </ListItem>
              <ListItem>
                <ListItemText>Total</ListItemText>
                <Typography variant="h6">Ksh. 20,000</Typography>
              </ListItem>
            </List>
            <ListItem>
              <Button variant="outlined" fullWidth>
                Proceed to Payment
              </Button>
            </ListItem>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ConfirmOrder;

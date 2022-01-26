import React from "react";
import {
  AppBar,
  Avatar,
  Button,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ display: "flex" }}
    >
      <Toolbar
        sx={{
          flexWrap: "wrap",
        }}
      >
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          kukuapp.com
        </Typography>
        <nav>
          <Link sx={{ my: 1, mx: 2 }}></Link>
        </nav>
        <Link
          href="/cart"
          sx={{
            my: 1,
            mx: 0.5,
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <ShoppingCartIcon />
          <span>{cartItems.length}</span>
        </Link>
        {/* <Avatar sx={{ my: 1, mx: 2 }}>
          <PersonIcon />
        </Avatar> */}
        <Button href="/login" sx={{ marginLeft: 2 }} variant="outlined">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

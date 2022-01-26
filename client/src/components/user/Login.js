import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/testapp.com">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Login = () => {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ mb: 2 }} variant="h4">
          kukuapp
        </Typography>
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">Sign in</Typography>
        <Box>
          <TextField
            name="email"
            margin="normal"
            fullWidth
            variant="outlined"
            label="Email "
          />
          <TextField
            name="password"
            type="password"
            margin="normal"
            fullWidth
            variant="outlined"
            label="Password"
          />
          <Button variant="contained" sx={{ mt: 3, mb: 2 }} fullWidth>
            Login
          </Button>
          <Grid container>
            <Grid sx={{ cursor: "pointer" }} item xs>
              <Link href="/forgotpassword" variant="body2">
                Forgot Password?
              </Link>
            </Grid>
            <Grid sx={{ cursor: "pointer" }} item>
              <Link href="/register" variant="body2">
                Do not have an account? Sign up.
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default Login;

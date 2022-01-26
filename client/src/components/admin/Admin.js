import React from "react";
import { Container, AppBar, Typography, Link } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Admin = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <AppBar className={classes.appBar} color="inherit" position="static">
        <Typography className={classes.heading}>Kuku App</Typography>
      </AppBar>
      <div />
      <Container maxWidth="">
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ marginBottom: 1 }}
            className={classes.title}
            variant="h4"
          >
            Admin Page
          </Typography>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              {/* <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid> */}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Grid>
  );
};

export default Admin;

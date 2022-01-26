import {
  Button,
  Container,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

const countries = [
  {
    value: "KEN",
    lable: "Kenya",
  },
  {
    value: "UG",
    lable: "Uganda",
  },
  {
    value: "TZ",
    lable: "Tanzania",
  },
];

const Shipping = () => {
  const [country, setCountry] = useState("Kenya");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/checkout");
  };

  return (
    <Fragment>
      <Container component="main" maxWidth="sm">
        <Grid container xs>
          <Grid item xs="12">
            <Paper
              variant="outlined"
              sx={{ my: { xs: 1, md: 1 }, p: { xs: 2, md: 3 } }}
            >
              <Typography variant="h6" gutterBottom>
                Shipping Address
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs="12">
                  <TextField fullWidth variant="standard" label="Address*" />
                </Grid>
                <Grid item xs="12">
                  <TextField
                    fullWidth
                    variant="standard"
                    label="Phone number*"
                  />
                </Grid>
                <Grid item xs="12" sm="6">
                  <TextField fullWidth variant="standard" label="City*" />
                </Grid>
                <Grid item xs="12" sm="6">
                  <TextField fullWidth variant="standard" label="Region" />
                </Grid>
                <Grid item xs="12" sm="6">
                  <TextField
                    fullWidth
                    variant="standard"
                    label="Postal Code*"
                  />
                </Grid>
                <Grid item xs="12" sm="6">
                  <TextField
                    fullWidth
                    select
                    variant="standard"
                    label="Country*"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    {countries.map((country) => (
                      <MenuItem key={country.value} value={country.lable}>
                        {country.lable}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
              <Button
                type="submit"
                onClick={handleSubmit}
                variant="contained"
                sx={{ mt: 3 }}
              >
                Continue
              </Button>
            </Paper>
          </Grid>
        </Grid>
        {/* </Box> */}
      </Container>
    </Fragment>
  );
};

export default Shipping;

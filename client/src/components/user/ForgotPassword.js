import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import React from "react";

const Copywright = (props) => {
  return <h1>Copywright</h1>;
};

const ForgotPassword = () => {
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
        <Avatar sx={{ m: 1, bgcolor: "warning.main" }}>
          <QuestionMarkIcon />
        </Avatar>
        <Typography sx={{ mb: 3 }} component="h1" variant="h5">
          Forgot Password
        </Typography>
        <Box>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            Required
            label="Forgot Password"
            name="email"
          />
          <Button variant="contained" fullWidth sx={{ mt: 2, mb: 2 }}>
            Send Email
          </Button>
        </Box>
        <Copywright />
      </Box>
    </Container>
  );
};

export default ForgotPassword;

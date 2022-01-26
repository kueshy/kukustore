import {
  Button,
  Container,
  CssBaseline,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment, useState } from "react";
import Header from "../Layouts/Header";
import Shipping from "./Shipping";
import ConfirmOrder from "./ConfirmOrder";
import Payment from "./Payment";

const steps = [
  "Shipping address",
  "Confirm order",
  "Payment details",
  //   "Review your order",
];

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <Shipping />;
    case 1:
      return <ConfirmOrder />;
    case 2:
      return <Payment />;
    // case 3:
    //   return <Review />;
    default:
      throw new Error("Unknown step");
  }
};

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Stepper activeStep={activeStep} sx={{ pt: 6, pb: 0 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Container>
      {/* <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      > */}
      <Fragment>
        {activeStep === steps.length ? (
          <Fragment>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order
              confirmation, and will send you an update when your order has
              shipped.
            </Typography>
          </Fragment>
        ) : (
          <Fragment>
            {getStepContent(activeStep)}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Container>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Container>
            </Box>
          </Fragment>
        )}
      </Fragment>
      {/* </Paper> */}
    </Fragment>
  );
};

export default Checkout;

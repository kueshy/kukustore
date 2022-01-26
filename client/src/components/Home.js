import React, { Fragment, useEffect } from "react";
import {
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import Header from "./Layouts/Header";

// import products from "../data.json";
import Product from "./product/Product";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../actions/productActions";

const Home = () => {
  const { loading, error, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
    }
    dispatch(getProducts());
  }, [dispatch, error]);

  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Container>
        <Typography sx={{ mt: 2, mb: 1 }} variant="h4">
          Latest Products
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          <Fragment>
            <Grid container spacing={2}>
              {products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </Grid>
          </Fragment>
        )}
      </Container>
    </Fragment>
  );
};

export default Home;

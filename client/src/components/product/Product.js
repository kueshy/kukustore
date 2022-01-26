import React, { Fragment } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

const Product = ({ product }) => {
  return (
    <Fragment>
      <Grid item xs="12" sm="6" md="3">
        <Card sx={{ height: 480 }}>
          <CardHeader
            action={
              <IconButton>
                <ShareIcon />
              </IconButton>
            }
          />

          <Link href={`/product/${product._id}`}>
            <CardMedia
              component="img"
              height="285"
              // image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              image={product.image}
              alt="Paella dish"
            />
          </Link>
          <CardContent>
            <Typography
              //   gutterBottom
              variant="body1"
              color="text.secondary"
              component="div"
            >
              <Link
                sx={{ textDecoration: "none" }}
                href={`/product/${product._id}`}
              >
                {product.name}
              </Link>
            </Typography>
            <Typography variant="h6">
              Ksh.{" "}
              {product.price.toLocaleString(navigator.language, {
                minimumFractionDigits: 2,
              })}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Fragment>
  );
};

export default Product;

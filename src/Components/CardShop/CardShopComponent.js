import React from "react";
import { useStyle } from "./CardShop.style.js";
import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
/**
 * write document
 */

export default function CardShopComponent(props) {
  const classes = useStyle();
  const { zoom, margin, title, caption, body, price } = props;
  return (
    <Card className={classes.root} style={{ zoom: zoom, margin: margin }}>
      <CardActionArea style={{ background: "#fff", textAlign: "justify" }}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="260"
          image="/assets/images/JAR.png"
          title="Contemplative Reptile"
        />
        <CardContent className={classes.CardContent}>
          <Typography
            style={{ color: "#fff", fontWeight: "bold" }}
            variant="h5"
            component="h2"
          >
            {title}
          </Typography>
          <Typography
            gutterBottom={40}
            style={{
              color: "#fff",
              fontWeight: "normal",
              marginBottom: "20px",
            }}
            variant="caption"
            component="h2"
          >
            {caption}
          </Typography>
          <Typography
            variant="body1"
            style={{
              color: "#fff",
              fontWeight: "lighter",
              fontSize: ".7rem",
              marginBottom: "20px",
            }}
            color="textSecondary"
            component="p"
          >
            {body}
          </Typography>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography
                gutterBottom={40}
                style={{ color: "#fff", fontWeight: "bold" }}
                variant="h6"
                component="h2"
              >
                {`${price} $`}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton>
                <AddCircleSharpIcon style={{ color: "#23A0A5" }} />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

CardShopComponent.propTypes = {
  /**
   * write document
   */
  state: PropTypes.string,
  /**
   * write document
   */
  setState: PropTypes.func,
  /**
   * write document
   */
  props: PropTypes.object,
};

CardShopComponent.defaultProps = {
  /**
   * write document
   */
  state: "hello world",
};

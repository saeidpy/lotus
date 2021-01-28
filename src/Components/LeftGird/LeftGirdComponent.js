import React from "react";
import { useStyle } from "./LeftGird.style.js";
import PropTypes from "prop-types";
import { Grid, IconButton, Typography } from "@material-ui/core";
import RemoveCircleSharpIcon from "@material-ui/icons/RemoveCircleSharp";
import CardShopComponent from "../CardShop/CardShopComponent.js";
/**
 * write document
 */

const shopCard1 = {
  title: "Lotus Jar",
  caption: "Green Fruit Jelly",
  price: "4.00",
  body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
};
const shopCard2 = {
  title: "Lotus Mi",
  caption: "Green Fruit Jelly",
  price: "2.00",
  body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
};

export default function LeftGirdComponent(props) {
  const classes = useStyle();
  const { state, setState } = props;
  return (
    <Grid container>
      <Grid
        container
        item
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.root}
      >
        <Grid item xs={6}>
          <Typography
            variant="h3"
            style={{ fontWeight: "bold", color: "#fff" }}
          >
            Best Sellers
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <IconButton className={classes.buttonIcon}>
            <RemoveCircleSharpIcon
              style={{ width: "50px", height: "50px", color: "#fff" }}
            />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        container
        item
        direction="row"
        justify="space-evenly"
        alignItems="center"
        className={classes.root}
      >
        <Grid item xs={6}>
          <CardShopComponent {...shopCard1} zoom={""} margin={"auto"} />
        </Grid>
        <Grid item xs={6}>
          <CardShopComponent {...shopCard2} zoom={".8"} margin={""} />
        </Grid>
      </Grid>
    </Grid>
  );
}

LeftGirdComponent.propTypes = {
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

LeftGirdComponent.defaultProps = {
  /**
   * write document
   */
  state: "hello world",
};

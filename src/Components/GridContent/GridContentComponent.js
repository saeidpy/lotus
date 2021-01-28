import React, { useState } from "react";
import { useStyle } from "./GridContent.style.js";
import PropTypes from "prop-types";
import { Grid, Typography } from "@material-ui/core";
import LeftGirdComponent from "../LeftGird/LeftGirdComponent.js";
import CateShopComponent from "../CateShop/CateShopComponent.js";

/**
 * write document
 */

const dataList = [
  {
    title: "Apple Fruit",
    caption: "Original Taste",
    img: "Bitmap (4).png",
    price: "10.00",
  },
  {
    title: "Triple Fruit",
    caption: "Original Taste",
    img: "Bitmap (5).png",
    price: "30.00",
  },
  {
    title: "Grape Fruit",
    caption: "Original Taste",
    img: "Bitmap (6).png",
    price: "20.00",
  },
];

export default function GridContentComponent(props) {
  const classes = useStyle();
  const [state, setstate] = useState(1);

  const handleOnClick = (key) => () => {
    setstate(key);
  };
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={7}>
        <LeftGirdComponent />
      </Grid>
      <Grid item xs={5}>
      <Typography
            variant="h5"
            style={{ fontWeight: "bold", color: "#0B7171" }}
          >
            More Items
          </Typography>
        {dataList.map((item, index) => {
          return (
            <CateShopComponent
              {...item}
              index={index}
              handleOnClick={handleOnClick}
              selected={index === state}
            />
          );
        })}
      </Grid>
    </Grid>
  );
}

GridContentComponent.propTypes = {
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

GridContentComponent.defaultProps = {
  /**
   * write document
   */
  state: "hello world",
};

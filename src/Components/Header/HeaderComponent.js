import React from "react";
import { useStyle } from "./Header.style.js";
import PropTypes from "prop-types";
import { Grid, IconButton, Typography } from "@material-ui/core";
import SearchComponent from "../Search/SearchComponent.js";

/**
 * write document
 */

export default function HeaderComponent(props) {
  const classes = useStyle();
  const { state, setState } = props;
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.root}
    >
      <Grid item style={{ zIndex: 10 }} xs={6}>
        <div style={{ marginLeft: "100px", display: "flex" }}>
          <Typography
            style={{ color: "#0B7171", fontWeight: "500" }}
            variant="h5"
            component="h2"
          >
            Lotus
          </Typography>
          <img
            alt="dimond"
            style={{ width: 20, height: 20, margin: "5px 0 0 20px" }}
            src="/assets/images/Bitmap (2).png"
          />
        </div>
      </Grid>
      <Grid
        item
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "40px",
        }}
        xs={6}
      >
        <SearchComponent />
        <IconButton
          style={{ width: "34px", height: "34px", margin: "3px 30px" }}
        >
          <img
            alt=""
            src="/assets/images/Bitmap (1).png"
            style={{ width: "34px", height: "34px" }}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
}

HeaderComponent.propTypes = {
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

HeaderComponent.defaultProps = {
  /**
   * write document
   */
  state: "hello world",
};

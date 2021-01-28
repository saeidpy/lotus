import React from "react";
import { useStyle } from "./Search.style.js";
import PropTypes from "prop-types";
import { IconButton, InputBase } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
/**
 * write document
 */

export default function SearchComponent(props) {
  const classes = useStyle();
  const { state, setState } = props;
  return (
    <div className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <img alt="" src="/assets/images/Bitmap (3).png"/>
      </IconButton>
    </div>
  );
}

SearchComponent.propTypes = {
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

SearchComponent.defaultProps = {
  /**
   * write document
   */
  state: "hello world",
};

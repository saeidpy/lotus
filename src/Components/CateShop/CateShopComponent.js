import React from "react";
import { useStyle } from "./CateShop.style.js";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import './style.css'
/**
 * write document
 */

export default function CateShopComponent(props) {
  const classes = useStyle();
  const {
    title,
    caption,
    img,
    selected,
    title2,
    price,
    handleOnClick,
    index,
  } = props;
  return (
    <Card
      className={classes.root}
      key={index}
      onClick={handleOnClick(index)}
      component={Button}
      style={{
        background: selected
          ? " linear-gradient(44.39deg, #50C9C3 6.16%, #96DEDA 94.73%)"
          : "#ffff",
        paddingLeft: selected ? "40px" : "",
        width: selected ? "360px" : "350px",
        transform: selected ? "translateX(-50px)" : "",
        animation:selected ? "shimmy 0.5s" :""
      }}
    >
      {selected && (
        <Typography className={classes.price}>{`$ ${price}`}</Typography>
      )}
      <CardMedia
        component="img"
        className={classes.cover}
        image={`/assets/images/${img}`}
        title="Live from space album cover"
      />
      <CardContent className={classes.content}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography
          className={classes.caption}
          variant="caption"
          color="textSecondary"
        >
          {caption}
        </Typography>
        <Typography className={classes.title}>{title2}</Typography>
      </CardContent>
      <CardActions className={classes.actionsCard}>
        <IconButton>
          <AddCircleSharpIcon
            style={{ color: selected ? "#fff" : "#23A0A5" }}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
}

CateShopComponent.propTypes = {
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

CateShopComponent.defaultProps = {
  /**
   * write document
   */
  state: "hello world",
};

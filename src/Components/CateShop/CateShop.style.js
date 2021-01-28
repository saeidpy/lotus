import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    background: "#FFFFFF",
    boxShadow: "-9px 0px 29px rgba(229, 229, 229, 0.5)",
    borderRadius: "29px !important",
    padding: "25px !important",
    width: "350px",
    margin: "15px"
  },
  cover: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "#F6F6F6",
    objectFit: "none",
  },
  actionsCard: {
    position: "absolute",
    bottom: "1px",
    right: "1px",
  },
  title: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "15px",
    letterSpacing: "-0.4px",
    color: "#0B7171",
  },
  caption: {
fontStyle: "normal",
fontWeight: 500,
fontWize: "12px",
lineHeight: "18px",
letterSpacing: "-0.32px",
color: "#B3B3B3"
  },
  price:{
    padding:"2px 15px",
    position:"absolute",
    left: 0,
    width:"fit-content",
    borderRadius:"14px",
    background:"#25A2A6",
    transform: "rotate(90deg)",
    color:"#fff"
  }
}));

export { useStyle };

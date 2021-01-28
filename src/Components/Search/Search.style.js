import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    border: "1px solid #CFCFCF",
    boxSizing: "border-box",
    borderRadius: " 22.5px",
  },
  iconButton:{
      padding:"7px 18px 6px 27px"
  },
  input:{
    padding:"5px 0px 5px 20px",
    color:"#0B7171"
  }
}));

export { useStyle };

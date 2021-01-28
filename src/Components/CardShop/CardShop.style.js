import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: "295px",
    borderRadius: "51px !important",
    marginTop:"40px"

  },
  CardContent: {
    background: "linear-gradient(313.37deg, #50C9C3 6.19%, #96DEDA 95.6%)",
    boxShadow: "-9px 0px 29px rgba(89, 197, 186, 0.397864)",
    borderRadius: "51px",
    padding:"30px !important"
  },
}));

export { useStyle };

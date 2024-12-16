import { createStyles, makeStyles } from "@mui/styles";
import color from "../../../assets/colors";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      marginLeft: "-108px",
      position: "relative",
      width: "100px",
      height: "100%",
      left: 28,
      borderRadius: "20px 0 0 20px",
      background: color.error,
      display: "flex",
      justifyContent: "space-around",
      transition: "transform 500ms ease",
    },
  })
);

export default useStyles;

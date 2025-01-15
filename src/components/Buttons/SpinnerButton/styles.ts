import { createStyles, makeStyles } from "@mui/styles";
import color from "../../../assets/colors";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    loaderRing: {
      height: "100px",
      width: "100px",
      borderRadius: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      boxShadow: `0.15em 0.3em 0px 0px ${color.shadow}`,
    },
    shadow: {
      height: "100px",
      width: "100px",
      background: color.shadow,
      position: "relative",
      transform: "translatex(-100px)",
      opacity: 0.3,
    },
    button: {
      height: "100px",
      width: "100px",
      border: "none",
      borderRadius: "50px",
      position: "absolute",
      backgroundColor: "transparent",
      fontSize: "2em",
      color: color.fontBlack,
    },
  })
);

export default useStyles;

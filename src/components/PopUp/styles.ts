import { createStyles, makeStyles } from "@mui/styles";
import color from "../../assets/colors";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: "calc(100vw - 4em)",
      height: "2.2em",
      background: "red",
      position: "fixed",
      bottom: "-2.2em",
      right: "2em",
      borderRadius: "1.1em",
      border: "none",
      boxShadow: `0.15em 0.3em 0px 0px ${color.shadow}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "transform 500ms ease",
    },
    text: {
      color: color.fontBlack,
      fontSize: "1em",
    },
  })
);

export default useStyles;

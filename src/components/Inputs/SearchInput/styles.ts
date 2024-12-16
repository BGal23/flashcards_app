import { createStyles, makeStyles } from "@mui/styles";
import color from "../../../assets/colors";

const useStyles = makeStyles(() =>
  createStyles({
    inputWrapper: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginTop: "1em",
    },
    input: {
      marginLeft: "1.6em",
      width: "100%",
      padding: "0 0 0 1em",
      height: "2em",
      borderRadius: "2em",
      border: "none",
      boxShadow: `0.15em 0.3em 0px 0px ${color.shadow}`,
    },
    iconIcon: {
      position: "relative",
      right: "2.2em",
      top: "0.1em",
    },
  })
);

export default useStyles;

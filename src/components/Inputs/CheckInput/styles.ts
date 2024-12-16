import { createStyles, makeStyles } from "@mui/styles";
import color from "../../../assets/colors";

const useStyles = makeStyles(() =>
  createStyles({
    inputWrapper: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: "1em",
    },
    input: {
      margin: "0 1em 0",
      width: "calc(100% - 2em)",
      padding: "0 0 0 1em",
      height: "2em",
      borderRadius: "2em",
      border: "none",
      boxShadow: `0.15em 0.3em 0px 0px ${color.shadow}`,
      fontSize: "1.5em",
    },
  })
);

export default useStyles;

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
      margin: "0 3em 0",
      width: "calc(100% - 6em)",
      padding: "0 0 0 1em",
      height: "3em",
      borderRadius: "2em",
      border: "none",
      boxShadow: `0.15em 0.3em 0px 0px ${color.shadow}`,
    },
  })
);

export default useStyles;

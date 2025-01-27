import { createStyles, makeStyles } from "@mui/styles";
import color from "../../../assets/colors";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "0.5em",
    },
    select: {
      padding: "0 0 0 0.7em",
      height: "2em",
      borderRadius: "1em",
      border: "none",
      boxShadow: `0.15em 0.3em 0px 0px ${color.shadow}`,
      width: "100%",
    },
    selectWrapper: {
      margin: "0 1em 0 1.4em",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "calc(100% - 2.4em)",
      gap: "0.6em",
      height: "3em",
    },
    addWrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      margin: "0.5em 1em 0.5em ",
      gap: "0.5em",
    },
    addInput: {
      padding: "0 0 0 1em",
      height: "2em",
      borderRadius: "1em",
      border: "none",
      boxShadow: `0.15em 0.3em 0px 0px ${color.shadow}`,
      width: "100%",
    },
    button: {
      border: "none",
      height: "2em",
      width: "2em",
      borderRadius: "1em",
    },
  })
);

export default useStyles;

import { createStyles, makeStyles } from "@mui/styles";
import color from "../../assets/colors";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      margin: "0.5em",
    },
    listWrapper: {
      width: "calc(100% - 1em)",
      height: "calc(100vh - 14.5em)",
      background: color.input,
      border: "none",
      boxShadow: `0.15em 0.3em 0px 0px ${color.shadow}`,
      borderRadius: "1em",
      display: "flex",
      flexDirection: "column",
      margin: "0 0.5em 0",
      maxHeight: "800px",
      overflowX: "hidden",
      overflowY: "scroll",
      scrollbarWidth: "none",
      "-ms-overflow-style": "none",

      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    emptyArray: {
      height: "3em",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "1em",
      color: color.fontBlack,
    },
  })
);

export default useStyles;

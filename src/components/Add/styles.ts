import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      margin: "1em 0.5em 1em",
      display: "flex",
      flexDirection: "column",
      gap: "0.7em",
    },
    slider: {
      width: "calc(100% - 2em)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "0.8em",
      margin: "0 1em 0",
    },
  })
);

export default useStyles;

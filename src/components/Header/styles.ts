import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      height: "4em",
      background: "#8ee000",
      padding: "0.5em 1em 0.5em",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
  })
);

export default useStyles;

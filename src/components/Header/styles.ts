import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      height: "4em",
      background: "#7ac70c",
      padding: "0.5em 1em 0.5em",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
  })
);

export default useStyles;

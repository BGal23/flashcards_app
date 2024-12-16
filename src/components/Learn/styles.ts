import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      margin: "1em 0.5em 1em",
      display: "flex",
      flexDirection: "column",
    },
    mainWord: {
      width: "100%",
      textAlign: "center",
      fontSize: "2em",
      marginBottom: "0.5em",
    },
    buttonsWrapper: {
      display: "flex",
      justifyContent: "space-between",
    },
  })
);

export default useStyles;

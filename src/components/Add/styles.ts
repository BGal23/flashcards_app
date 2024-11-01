import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      margin: "0.5em",
      display: "flex",
      flexDirection: "column",
      gap: "1em",
    },
  })
);

export default useStyles;

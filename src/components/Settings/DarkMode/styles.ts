import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    box: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  })
);

export default useStyles;

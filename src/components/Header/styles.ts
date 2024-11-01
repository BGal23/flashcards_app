import { createStyles, makeStyles } from "@mui/styles";
import color from "../../assets/colors";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      height: "4em",
      background: color.header,
      padding: "0.5em 1em 0.5em",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
  })
);

export default useStyles;

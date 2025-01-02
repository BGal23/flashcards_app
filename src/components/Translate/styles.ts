import { createStyles, makeStyles } from "@mui/styles";
import color from "../../assets/colors";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      marginTop: "2em",
      textAlign: "center",
      color: color.fontBlack,
    },
  })
);

export default useStyles;

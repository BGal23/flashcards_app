import { createStyles, makeStyles } from "@mui/styles";
import color from "../../../assets/colors";

const useStyles = makeStyles(() =>
  createStyles({
    box: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: color.fontBlack,
    },
    buttonsWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "1.8em",
      gap: 5,
    },
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "1.9em",
      height: "1.9em",
      border: "none",
      borderRadius: 3,
      background: color.fontBlack,
      color: color.background,
    },
  })
);

export default useStyles;

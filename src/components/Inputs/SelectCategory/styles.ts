import { createStyles, makeStyles } from "@mui/styles";
import color from "../../../assets/colors";

const useStyles = makeStyles(() =>
  createStyles({
    selectWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      left: 0,
      gap: "0.7em",
    },
    select: {
      minWidth: 140,
    },
    iconWrapper: {
      color: color.fontBlack,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "0.5em",
    },
  })
);

export default useStyles;

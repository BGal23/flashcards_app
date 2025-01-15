import { createStyles, makeStyles } from "@mui/styles";
import color from "../../assets/colors";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      background: color.header,
      "@media (min-width: 540px)": {
        display: "flex",
        justifyContent: "space-around",
      },
    },
    iconsWrapper: {
      height: "4em",
      padding: "0.5em 1em 0.5em",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      "@media (min-width: 540px)": {
        width: "520px",
      },
    },
  })
);

export default useStyles;

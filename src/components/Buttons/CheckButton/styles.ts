import { createStyles, makeStyles } from "@mui/styles";
import color from "../../../assets/colors";

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      border: "none",
      padding: "0.3em 0.7em 0.3em",
      margin: "1em",
      background: color.headerButton,
      boxShadow: `0.15em 0.3em 0px 0px ${color.shadow}`,
      borderRadius: "1.5em",
      fontSize: "1.5em",
    },
  })
);

export default useStyles;

import { createStyles, makeStyles } from "@mui/styles";
import color from "../../../assets/colors";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "0.5em",
    },
    textarea: {
      margin: "0.5em 1em 0 1em",
      padding: "1em",
      height: "5em",
      borderRadius: "1.5em",
      border: "none",
      boxShadow: `0.15em 0.3em 0px 0px ${color.shadow}`,
      fontSize: "medium",
      resize: "none",
    },
  })
);

export default useStyles;

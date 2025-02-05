import { createStyles, makeStyles } from "@mui/styles";
import color from "../../../assets/colors";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      height: "4.4em",
      width: "4.4em",
      border: "none",
      background: color.headerButton,
      boxShadow: `0.15em 0.3em 0px 0px ${color.shadow}`,
      borderRadius: "2.2em",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "background 0.2s ease",
    },
  })
);

export default useStyles;

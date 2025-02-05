import { createStyles, makeStyles } from "@mui/styles";
import color from "../../../assets/colors";
const useStyles = makeStyles(() =>
  createStyles({
    inputWrapper: {
      margin: "1em",
      width: "100%",
      display: "flex",
      alignItems: "center",

      "& input": {
        display: "none",
      },
    },

    label: {
      background: color.input,
      color: color.fontBlack,
      borderRadius: 10,
      border: `1px solid ${color.fontBlack}`,
      width: "calc(100%)",
      cursor: "pointer",
      boxShadow: `0.1em 0.2em 0px 0px ${color.shadow}`,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      gap: "0.5em",
    },
    icon: {
      position: "relative",
      display: "flex",
      padding: "0.3em",
      background: color.headerButton,
      width: "1.4em",
      borderRight: `1px solid ${color.fontBlack}`,
    },
  })
);

export default useStyles;

import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    box: {
      display: "flex",
      flexDirection: "column",
      gap: "0.3em",
      marginBottom: "0.5em",
      overflow: "hidden",
    },
    input: {
      height: "1em",
      background: "transparent",
      border: "none",
      borderBottom: "1px solid black",
      fontSize: "1em",
      borderRadius: 0,
    },
    text: {
      fontSize: "1em",
      textWrap: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
    textarea: {
      height: 50,
      resize: "none",
      border: "none",
      padding: "0.3em",
      borderRadius: 5,
    },
  })
);

export default useStyles;

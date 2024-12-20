import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    box: {
      display: "flex",
      flexDirection: "column",
      gap: "0.3em",
      paddingBottom: "0.5em",
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
      height: "calc(1em + 1px)",
      textWrap: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
    textarea: {
      height: 50,
    },
  })
);

export default useStyles;

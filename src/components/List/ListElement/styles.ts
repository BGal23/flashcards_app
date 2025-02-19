import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      height: "3em",
      display: "flex",
      flexDirection: "row",
      alignItems: "start",
      borderBottom: "1px solid black",
      padding: "0.5em 1em 0 1em ",
      justifyContent: "space-between",
      transition: "height 500ms ease",
      overflow: "hidden",
    },
    description: {
      paddingBottom: "0.5em",
    },
    buttonsWrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8,
      paddingBottom: "0.5em",
    },
    buttonsBox: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8,
      overflow: "hidden",
      borderRadius: 18,
      height: 36,
    },
  })
);

export default useStyles;

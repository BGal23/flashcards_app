import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      marginRight: -44,
      position: "relative",
      width: 80,
      height: "100%",
      right: 44,
      borderRadius: 18,
      background: "transparent",
      display: "flex",
      justifyContent: "start",
      gap: 8,
      transition: "transform 500ms ease",
    },
    button: {
      width: "36px",
      height: "36px",
      border: "none",
      borderRadius: "18px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 0,
      transition: "background-color 500ms ease",
    },
  })
);

export default useStyles;

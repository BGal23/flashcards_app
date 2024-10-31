import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      height: "4em",
      width: "4em",
      border: "none",
      background: "#7ac70c",
      boxShadow: "0.15em 0.3em 0px 0px #6f6f6f",
      borderRadius: "0.5em",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      transition: "background 0.2s ease",
    },
  })
);

export default useStyles;

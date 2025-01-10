import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      "@media (min-width: 540px)": {
        display: "flex",
        justifyContent: "center",
      },
    },
    elementsWrapper: {
      "@media (min-width: 540px)": {
        width: "520px",
      },
    },
  })
);

export default useStyles;

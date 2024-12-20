import { useEffect, useState } from "react";
import useStyles from "./styles";
import { Checkbox } from "@mui/material";
import { getFromLocalStorage } from "../../../utils/localStorage";

const DarkMode = () => {
  const classes = useStyles();
  const [isDarkModeOn, setIsDarkModeOn] = useState<boolean>(false);

  useEffect(() => {
    const currentMode: boolean | null = getFromLocalStorage("darkMode");
    if (typeof currentMode === "boolean") {
      setIsDarkModeOn(currentMode);
    }
  }, []);

  const handleClick = () => {
    localStorage.setItem("darkMode", JSON.stringify(!isDarkModeOn));
    setIsDarkModeOn(!isDarkModeOn);
  };

  return (
    <div className={classes.box}>
      <h4>Dark Mode</h4>
      <Checkbox
        id="checkbox"
        onChange={handleClick}
        checked={isDarkModeOn}
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: "2em",
            color: "black",
            margin: -1.3,
          },
        }}
      />
    </div>
  );
};

export default DarkMode;

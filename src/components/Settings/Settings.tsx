import { ISettingsProps } from "../../types/props";
import DarkMode from "./DarkMode/DarkMode";
import useStyles from "./styles";

const Settings: React.FC<ISettingsProps> = ({
  isDarkModeOn,
  setIsDarkModeOn,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ul>
        <li>
          <DarkMode
            isDarkModeOn={isDarkModeOn}
            setIsDarkModeOn={setIsDarkModeOn}
          />
        </li>
      </ul>
    </div>
  );
};

export default Settings;

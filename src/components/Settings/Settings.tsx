import { ISettingsProps } from "../../types/props";
import DarkMode from "./DarkMode/DarkMode";
import useStyles from "./styles";

const Settings: React.FC<ISettingsProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ul>
        <li>
          <DarkMode />
        </li>
      </ul>
    </div>
  );
};

export default Settings;

import { ISettingsProps } from "../../types/props";
import SettingElement from "./SettingElement/SettingElement";
import useStyles from "./styles";

const Settings: React.FC<ISettingsProps> = ({
  isDarkModeOn,
  setIsDarkModeOn,
  isShowWrongWord,
  setIsShowWrongWord,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ul>
        <li>
          <SettingElement
            title="Dark Mode"
            memoryKey="darkMode"
            isTurnOn={isDarkModeOn}
            setIsTurnOn={setIsDarkModeOn}
          />
        </li>
        <li>
          <SettingElement
            title="Show wrong word"
            memoryKey="showWrongWord"
            isTurnOn={isShowWrongWord}
            setIsTurnOn={setIsShowWrongWord}
          />
        </li>
      </ul>
    </div>
  );
};

export default Settings;

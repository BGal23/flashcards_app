import { ISettingsProps } from "../../types/props";
import SettingBooleanElement from "./SettingBooleanElement/SettingBooleanElement";
import SettingTimeElement from "./SettingTimeElement/SettingTimeElement";
import useStyles from "./styles";

const Settings: React.FC<ISettingsProps> = ({
  isDarkModeOn,
  setIsDarkModeOn,
  isShowWrongWord,
  setIsShowWrongWord,
  timeNextWord,
  setTimeNextWord,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ul>
        <li>
          <SettingBooleanElement
            title="Dark Mode"
            memoryKey="darkMode"
            isTurnOn={isDarkModeOn}
            setIsTurnOn={setIsDarkModeOn}
          />
        </li>
        <li>
          <SettingBooleanElement
            title="Show wrong word"
            memoryKey="showWrongWord"
            isTurnOn={isShowWrongWord}
            setIsTurnOn={setIsShowWrongWord}
          />
        </li>
        <li>
          <SettingTimeElement
            title="Time until the next word"
            memoryKey="timeNextWord"
            timeNextWord={timeNextWord}
            setTimeNextWord={setTimeNextWord}
          />
        </li>
      </ul>
    </div>
  );
};

export default Settings;

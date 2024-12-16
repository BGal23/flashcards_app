import { ISettingsProps } from "../../types/props";
import useStyles from "./styles";

const Settings: React.FC<ISettingsProps> = () => {
  const classes = useStyles();
  return <div className={classes.container}>Coming soon</div>;
};

export default Settings;

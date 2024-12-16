import { ITranslateProps } from "../../types/props";
import useStyles from "./styles";

const Translate: React.FC<ITranslateProps> = () => {
  const classes = useStyles();
  return <div className={classes.container}>Coming soon</div>;
};

export default Translate;

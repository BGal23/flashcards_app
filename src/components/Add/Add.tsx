import { IAddProps } from "../../types/props";
import useStyles from "./styles";

const Add: React.FC<IAddProps> = () => {
  const classes = useStyles();
  return <div className={classes.container}>Add new world</div>;
};

export default Add;

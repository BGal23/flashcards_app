import { IListProps } from "../../types/props";
import useStyles from "./styles";

const List: React.FC<IListProps> = () => {
  const classes = useStyles();
  return <div className={classes.container}>List</div>;
};

export default List;

import useStyles from "./styles";
import { FaBook, FaClipboardList, FaPlusCircle } from "react-icons/fa";
import { MdGTranslate } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { IHeaderProps } from "../../types/props";
import HeaderButton from "../Buttons/HeaderButton/HeaderButton";
import color from "../../assets/colors";

const Header: React.FC<IHeaderProps> = ({ setMainView, mainView }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.iconsWrapper}>
        <HeaderButton
          setMainView={setMainView}
          mainView={mainView}
          activate={"learn"}
          icon={<FaBook size={"2.5em"} color={color.fontBlack} />}
        />
        <HeaderButton
          setMainView={setMainView}
          mainView={mainView}
          activate={"add"}
          icon={<FaPlusCircle size={"2.5em"} color={color.fontBlack} />}
        />
        <HeaderButton
          setMainView={setMainView}
          mainView={mainView}
          activate={"list"}
          icon={<FaClipboardList size={"2.5em"} color={color.fontBlack} />}
        />
        <HeaderButton
          setMainView={setMainView}
          mainView={mainView}
          activate={"translate"}
          icon={<MdGTranslate size={"2.5em"} color={color.fontBlack} />}
        />
        <HeaderButton
          setMainView={setMainView}
          mainView={mainView}
          activate={"settings"}
          icon={<FaGear size={"2.5em"} color={color.fontBlack} />}
        />
      </div>
    </div>
  );
};

export default Header;

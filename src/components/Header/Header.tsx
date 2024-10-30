import useStyles from "./styles";
import { FaBook, FaClipboardList, FaCloudDownloadAlt } from "react-icons/fa";
import { MdGTranslate } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { IHeaderProps } from "../../types/props";

const Header: React.FC<IHeaderProps> = ({ setMainView, mainView }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <button
        style={{ background: mainView === "learn" ? " #faa918" : "#8ee000" }}
        onClick={() => setMainView("learn")}
      >
        <FaBook size={"3em"} />
      </button>
      <button
        style={{ background: mainView === "list" ? " #faa918" : "#8ee000" }}
        onClick={() => setMainView("list")}
      >
        <FaClipboardList size={"3em"} />
      </button>
      <button
        style={{
          background: mainView === "translate" ? " #faa918" : "#8ee000",
        }}
        onClick={() => setMainView("translate")}
      >
        <MdGTranslate size={"3em"} />
      </button>
      <button
        style={{ background: mainView === "download" ? " #faa918" : "#8ee000" }}
        onClick={() => setMainView("download")}
      >
        <FaCloudDownloadAlt size={"3em"} />
      </button>
      <button
        style={{ background: mainView === "settings" ? " #faa918" : "#8ee000" }}
        onClick={() => setMainView("settings")}
      >
        <FaGear size={"3em"} />
      </button>
    </div>
  );
};

export default Header;

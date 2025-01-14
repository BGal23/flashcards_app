import Header from "./components/Header/Header";
import Learn from "./components/Learn/Learn";
import Settings from "./components/Settings/Settings";
import List from "./components/List/List";
import Translate from "./components/Translate/Translate";
import Add from "./components/Add/Add";
import useSaveScreen from "./hooks/useSaveScreen";
import { useEffect, useLayoutEffect, useState } from "react";
import { getFromLocalStorage } from "./utils/localStorage";
import useStyles from "./styles";

const App = () => {
  const [mainView, setMainView] = useSaveScreen("screen", "learn");
  const [isDarkModeOn, setIsDarkModeOn] = useState<boolean>(false);
  const [isShowWrongWord, setIsShowWrongWord] = useState<boolean>(false);
  const classes = useStyles();

  useLayoutEffect(() => {
    const currentMode: boolean | null = getFromLocalStorage("darkMode");
    if (typeof currentMode === "boolean") {
      setIsDarkModeOn(currentMode);
    }
    if (isDarkModeOn) {
      document.body.classList.add("darkMode");
    } else {
      document.body.classList.remove("darkMode");
    }
  }, [isDarkModeOn]);

  useEffect(() => {
    setMainView(mainView);
  });

  const changeMainView = (mainView: string) => {
    switch (mainView) {
      case "learn":
        return (
          <Learn isShowWrongWord={isShowWrongWord} setMainView={setMainView} />
        );

      case "list":
        return <List />;

      case "translate":
        return <Translate test="temp" />;

      case "add":
        return <Add test="temp" />;

      case "settings":
        return (
          <Settings
            isDarkModeOn={isDarkModeOn}
            setIsDarkModeOn={setIsDarkModeOn}
            isShowWrongWord={isShowWrongWord}
            setIsShowWrongWord={setIsShowWrongWord}
          />
        );
    }
  };

  return (
    <>
      <Header setMainView={setMainView} mainView={mainView} />
      <div className={classes.container}>
        <div className={classes.elementsWrapper}>
          {changeMainView(mainView)}
        </div>
      </div>
    </>
  );
};

export default App;

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
  const [timeNextWord, setTimeNextWord] = useState<number>(5000);
  const classes = useStyles();

  useLayoutEffect(() => {
    const currentMode: boolean | null = getFromLocalStorage("darkMode");
    if (currentMode) {
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

    const currentShowSet: boolean | null = getFromLocalStorage("showWrongWord");
    const currentTimeSet: number | null = getFromLocalStorage("timeNextWord");

    if (currentShowSet) setIsShowWrongWord(currentShowSet);
    if (currentTimeSet) setTimeNextWord(currentTimeSet);
  }, [mainView, setMainView]);

  const changeMainView = (mainView: string) => {
    switch (mainView) {
      case "learn":
        return (
          <Learn
            isShowWrongWord={isShowWrongWord}
            setMainView={setMainView}
            timeNextWord={timeNextWord}
          />
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
            timeNextWord={timeNextWord}
            setTimeNextWord={setTimeNextWord}
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

import Header from "./components/Header/Header";
import Learn from "./components/Learn/Learn";
import Settings from "./components/Settings/Settings";
import List from "./components/List/List";
import Translate from "./components/Translate/Translate";
import Add from "./components/Add/Add";
import useSaveScreen from "./hooks/useSaveScreen";
import { useEffect } from "react";
import { getFromLocalStorage } from "./utils/localStorage";

const App = () => {
  const [mainView, setMainView] = useSaveScreen("screen", "learn");

  useEffect(() => {
    const currentMode: boolean | null = getFromLocalStorage("darkMode");
    if (currentMode === null) {
      localStorage.setItem("darkMode", JSON.stringify(false));
    }
  }, []);

  useEffect(() => {
    setMainView(mainView);
  });

  const changeMainView = (mainView: string) => {
    switch (mainView) {
      case "learn":
        return <Learn test="temp" />;

      case "list":
        return <List />;

      case "translate":
        return <Translate test="temp" />;

      case "add":
        return <Add test="temp" />;

      case "settings":
        return <Settings test="temp" />;
    }
  };

  return (
    <>
      <Header setMainView={setMainView} mainView={mainView} />
      {changeMainView(mainView)}
    </>
  );
};

export default App;

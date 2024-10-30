import { useState } from "react";
import Header from "./components/Header/Header";
import Learn from "./components/Learn/Learn";
import Settings from "./components/Settings/Settings";
import List from "./components/List/List";
import Translate from "./components/Translate/Translate";

const App = () => {
  const [mainView, setMainView] = useState<string>("learn");

  const changeMainView = (mainView: string) => {
    switch (mainView) {
      case "learn":
        return <Learn />;

      case "list":
        return <List />;

      case "translate":
        return <Translate />;

      case "download":
        return <h3>Coming soon</h3>;

      case "settings":
        return <Settings />;
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

import Routes from "./routes";
import { useState } from "react";
import { themes, themeContext } from "./context";
import { GlobalStyle } from "./app.style";
const App = () => {
  const [theme, setTheme] = useState(themes.light);
  const value = { theme, setTheme };
  return (
    <>
      <GlobalStyle theme={theme} />
      <themeContext.Provider value={value}>
        <Routes />
      </themeContext.Provider>
    </>
  );
};

export default App;

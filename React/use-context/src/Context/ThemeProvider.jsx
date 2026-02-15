import {useState } from "react";
import { ThemeContext } from "./ThemeContext";



const ThemeProvider = ({children}) => {
  const [dark, setDark] = useState(false);

  return (
    <div>
      <ThemeContext.Provider value={{ dark, setDark }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;

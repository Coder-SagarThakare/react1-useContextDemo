/**
 * This context is created to change the theme of our body tag.
 */

import { createContext, useEffect, useState } from "react";

// created context named as ThemeContext
export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {

  const lightThemeStyle = {
    bgcolor: "white",
    color: "black",
  };

  const blackThemeStyle = {
    bgcolor: "black",
    color: "white",
  };

  // aaplyala bydefault white theme thevaychi aahe mhnun ith aapn black theme ghetli aahe
  // useffect mdhe aapm color change krtoy
  // if you want bydefault black theme then use initially lightThemeBackground
  const [theme, setTheme] = useState(blackThemeStyle);

// update bgcolor, and color of body after state changes
  useEffect(() => {
    document.body.style.backgroundColor =
      theme.bgcolor === "black" ? "white" : "black";
    document.body.style.color = theme.color === "white" ? "black" : "white";
  }, [theme]);

  // toggle and set theme of component
  const toggleTheme = () => {
    theme.bgcolor === "white"
      ? setTheme(blackThemeStyle)
      : setTheme(lightThemeStyle);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

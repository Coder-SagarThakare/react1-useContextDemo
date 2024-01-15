import React, { useContext } from "react";
import Component2 from "./Component2";
import { ThemeContext } from "../Context/ThemeContext";

function Component1() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>Component1 rendered</div>
        {theme.bgcolor === "black" ? (
          <button onClick={() => toggleTheme()}>Dark theme</button>
        ) : (
          <button onClick={() => toggleTheme()}>Light theme</button>
        )}
      </div>
      <Component2 />
    </div>
  );
}

export default Component1;

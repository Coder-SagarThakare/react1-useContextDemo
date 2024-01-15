import logo from "./logo.svg";
import "./App.css";

import React, { createContext } from "react";
import Component1 from "./Components/Component1";
import { AuthProvider } from "./Context/AuthContext";
import { ThemeProvider } from "./Context/ThemeContext";

export const MyContext = createContext();

// wrapped all component in ThemeProvider, AuthProvider

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Component1 />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

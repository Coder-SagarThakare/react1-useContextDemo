/**
 * created this context for pass users data throught the website
 */

import { createContext, useContext, useEffect, useState } from "react";

// created context
const AuthContext = createContext();

// dummy API to set users data
function getUserDataAPI() {
  return {
    name: "sagar",
    "user,id": "123",
    technology: "React",
  };
}

// AuthProvider to wrap component where you want to pass your user' data
// in this case we can access users data throught the al website
// see App.js

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // if token && user==null => in only this situation we can set user
  // useEffect dependent on state user
  useEffect(() => {
    if (!!localStorage.getItem("token") && user == null) {
      setUser(getUserDataAPI());
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// first way in component3.js
// Second way to use this context in child component
export const useAuth = () => {
  return useContext(AuthContext);
};

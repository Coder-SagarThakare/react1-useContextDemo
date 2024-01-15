import React from "react";
import { useAuth } from "../Context/AuthContext";

function Component3() {
  // first way to use our context.
  const { user, setUser } = useAuth();

  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <b>Component3 rendered and showing data using useContext</b>

      {/* conditional rendering for login/logout button*/}
      {user ? (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          Welcome, <h1>{user?.name} </h1>{" "}
          <button onClick={() => setUser(false)}>Logout user</button>
        </div>
      ) : (
        <div>
          <div style={{ color: "red" }}>You need to login first</div>
          <button onClick={() => setUser(null)}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Component3;

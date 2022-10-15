import React, { useContext } from "react";
import { auth } from "../config/firebase";
import { AuthContext } from "../context/auth-context";

const Navbar = () => {
  const AuthCTX = useContext(AuthContext);

  const logoutHandler = async () => {
    await auth.signOut();
    AuthCTX.setToken("");
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h5>Logo</h5>
      <button onClick={logoutHandler}>logout</button>
    </div>
  );
};

export default Navbar;

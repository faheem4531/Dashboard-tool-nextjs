import { createContext, useContext, useState } from "react";

const AuthContext = createContext({ token: "", setToken: () => {} });
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const obj = {
    token,
    setToken: (val) => setToken(val),
  };

  return <Provider value={obj}>{children}</Provider>;
};

export { AuthContext, AuthProvider };

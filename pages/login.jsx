import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/login.module.css";
import {
  browserSessionPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { AuthContext } from "../context/auth-context";
import { useRouter } from "next/router";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const AuthCTX = useContext(AuthContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) router.push("/");
    });
  }, []);

  const loginHandler = async () => {
    try {
      await setPersistence(auth, browserSessionPersistence);
      const userData = await signInWithEmailAndPassword(auth, email, password);
      console.log(userData.user.uid);
      AuthCTX.setToken(userData.user.uid);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={styles.wrapper}>
      <h1 onClick={() => console.log(AuthCTX.token)}>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};

export default login;

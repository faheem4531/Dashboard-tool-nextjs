import React, { useState } from "react";
import styles from "../styles/signup.module.css";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName,setName]=useState("")

  const submitHandler = async () => {
    try {
     const result=await axios.post('api/signup',{displayName,email,password});
     console.log(result.data)
    } catch (e) {}
  };
  return (
    <div className={styles.wrapper}>
      <h1>Signup</h1>
      <input
        type="name"
        value={displayName}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
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
      <button onClick={submitHandler}>signup</button>
    </div>
  );
};

export default Signup;

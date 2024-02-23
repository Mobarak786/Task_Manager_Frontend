import React, { useState } from "react";
import styles from "./LoginComponent.module.css";

import gmail from "../../assets/Icons/gmail.png";
import lock from "../../assets/Icons/lock.png";
import view from "../../assets/Icons/view.png";

const LoginComponent = () => {
  const [hidePass, setHidePass] = useState(true);
  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form>
        <label htmlFor="email">
          <img src={gmail} alt="gmail-icon" />
          <input type="email" placeholder="Email" />
        </label>
        <label htmlFor="password">
          <img src={lock} alt="lock-icon" />
          <input type={hidePass ? "password" : "text"} placeholder="Password" />
          <img
            src={view}
            alt="view-icon"
            style={{ cursor: "pointer" }}
            onClick={() => setHidePass(!hidePass)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <p>Have no account yet?</p>
      <button type="submit">Register</button>
    </div>
  );
};

export default LoginComponent;

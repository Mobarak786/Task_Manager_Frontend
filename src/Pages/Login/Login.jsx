import React from "react";
import BannerComponent from "../../Components/Banner/BannerComponent";
import LoginComponent from "../../Components/Login/LoginComponent";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <BannerComponent />
      </div>
      <div className={styles.section2}>
        <LoginComponent />
      </div>
    </div>
  );
};

export default Login;

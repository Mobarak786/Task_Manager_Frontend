import React from "react";
import styles from "./BannerComponent.module.css";
import Art from "../../assets/Images/Art.png";

const BannerComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.center_div}>
        <div className={styles.center_circle}>
          <img alt="banner-logo" src={Art} />
        </div>
        <h2>Welcome aboard my friend</h2>
        <p>just a couple of clicks and we start</p>
      </div>
    </div>
  );
};

export default BannerComponent;

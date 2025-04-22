// HexagonProfileImage.jsx
import React from "react";
import styles from "./HexAvatar.module.scss"; // Import the SCSS module

export default function HexagonProfileImage({
  imageUrl,
  theme = "default", // Options: "default", "purple", etc.
}) {
  const themeClass = theme === "purple" ? styles.hexagonProfile_purple : "";

  return (
    <div className="flex items-center justify-center p-12">
      <div className={`${styles.hexagonProfile} ${themeClass}`}>
        <div className={styles.border}></div>
        <div className={styles.background}></div>
        <div className={styles.imageTop}>
          <img src={imageUrl} alt="Profile" />
        </div>
        <div className={styles.imageBottom}>
          <img src={imageUrl} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

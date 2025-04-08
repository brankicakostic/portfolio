import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>I’m Brankica</h1>
        <h1>Frontend developer</h1>
      </div>

      <div className={styles.bottomLeft}>
        <h3 className={styles.portfolio}>Portfolio</h3>
        <p className={styles.meta}>
          LAST UPDATE ✦ 2025
          <br />
          ©BRANKICA KOSTIC
          <br />
          SCROLL
        </p>
      </div>

      <div className={styles.rightButtons}>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className={styles.tagline}>
        <h3>Explore a series of my latest pursuits and interests</h3>
      </div>
    </section>
  );
};

export default Hero;

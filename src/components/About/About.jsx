import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <h2>
          Passionate about building high-performance, scalable applications.
        </h2>
      </div>

      <div className={styles.bottomLeft}>
        <p>
          I build fast, interactive, and scalable web applications using React.
          I have worked on optimization and other performance improvements
          enhancing application speed and efficiency. Boasting over six years of
          expertise, I thrive on solving complex frontend challenges and
          improving digital products..
        </p>
      </div>
    </section>
  );
};

export default About;

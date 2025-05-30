import { motion } from "framer-motion";
import PersonImage from "../../assets/person.png";
import styles from "./About.module.scss"; // Importing the CSS module

const About = () => {
  return (
    <section id="about" className={`${styles.about} py-16 px-6 scroll-mt-24`}>
      <motion.div
        className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* About text */}
        <div className="max-w-xl">
          <h1 className="text-3xl font-semibold mb-6 border-b-4 inline-block border-green-500">
            About me
          </h1>
          <p className="mb-4">
            I'm a front-end developer passionate about crafting clean,
            user-focused web interfaces. I enjoy working with modern JavaScript
            tools and bringing intuitive designs to life.
          </p>
          <p className="mb-4">
            With experience in React, SCSS, and performance optimization, I
            focus on creating responsive, scalable, and accessible applications.
            I believe in continuous learning and enjoy building meaningful
            digital experiences.
          </p>
          <p>
            Outside of coding, I’m a full-time mom, always balancing creativity,
            learning, and joyful chaos.
          </p>
        </div>

        {/* Double-wrapper: Outer = neon border, Inner = actual hex clip */}
        <div className={styles.about__hexFrame}>
          <img src={PersonImage} alt="Person" />
        </div>
      </motion.div>
    </section>
  );
};

export default About;

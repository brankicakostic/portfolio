import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-16 px-6">
      <motion.div
        className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* About text */}
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold mb-6 border-b-4 inline-block border-green-500">
            About me
          </h2>
          <p className="text-gray-300 mb-4">
            I'm a front-end developer passionate about crafting clean,
            user-focused web interfaces. I enjoy working with modern JavaScript
            tools and bringing intuitive designs to life.
          </p>
          <p className="text-gray-300 mb-4">
            With experience in React, SCSS, and performance optimization, I
            focus on creating responsive, scalable, and accessible applications.
            I believe in continuous learning and enjoy building meaningful
            digital experiences.
          </p>
          <p className="text-gray-300">
            Outside of coding, I’m a full-time mom, always balancing creativity,
            learning, and joyful chaos.
          </p>
        </div>
        {/* Hexagon profile image */}
        <div className="w-60 h-60 p-1">
          <div className="w-full h-full hexagon overflow-hidden">
            <img
              src="/images/brankica.jpeg"
              alt="Profile"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

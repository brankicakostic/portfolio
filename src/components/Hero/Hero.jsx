import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center px-4"
    >
      {/* Full-width pozadinska slika */}
      {/* <img
        src="/frontend.jpg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
 */}

      {/*       <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-4">
          Brankica Koštić
        </h1>
      
        <a
          href="#projects"
          className="px-6 py-2 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white dark:hover:text-black transition"
        >
          View Projects
        </a>
      </section> */}

      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
        Hello, I'm Brankica{" "}
        <span className="text-green-500">&lt;Frontend Developer /&gt;</span>
      </h1>
      <p className="text-lg md:text-xl text-neutral-700 dark:text-gray-400 mb-8">
        I craft clean and interactive user experiences with modern front-end
        technologies.
      </p>
      <div className="mt-6">
        <a
          href="/Brankica_Kostic_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white dark:hover:text-black transition"
        >
          View CV
        </a>
      </div>
    </section>
  );
};

export default Hero;

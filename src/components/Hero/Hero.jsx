import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center text-center text-white px-4"
    >
      {/* Full-width pozadinska slika */}
      {/* <img
        src="/frontend.jpg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
 */}

      <div className="max-w-4xl mx-auto z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Hello, I'm{" "}
          <span className="text-green-500">&lt;Frontend Developer /&gt;</span>
        </h1>
        <p className="text-gray-400 mb-8">
          I craft clean and interactive user experiences with modern front-end
          technologies.
        </p>
        <div className="mt-6">
          <a
            href="/Brankica_Kostic_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-black transition-colors"
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

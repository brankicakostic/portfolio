import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Expereance from "../components/Experience/Expereance";
import Footer from "../components/Footer/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetBottom = offsetTop + el.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderLink = (id, label) => (
    <li>
      <a
        href={`#${id}`}
        className={`hover:text-green-500 ${
          activeSection === id ? "text-green-500" : "text-gray-400"
        }`}
      >
        {activeSection === id ? `<${label} />` : label}
      </a>
    </li>
  );

  return (
    <main className="bg-black text-white min-h-screen font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
        <nav className="flex items-center justify-between px-6 md:px-20 py-4">
          <h1 className="text-xl font-bold">Brankica Kostic</h1>
          <ul className="flex gap-6">
            {renderLink("hero", "Home")}
            {renderLink("skills", "Skills")}
            {renderLink("projects", "Projects")}
            {renderLink("contact", "Contact")}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative px-6 md:px-20 py-32 bg-black">
        <div className="max-w-screen-lg mx-auto px-6">
          <div className="relative z-10 max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Hello, I'm{" "}
              <span className="text-green-500">
                &lt;Frontend Developer /&gt;
              </span>
            </h1>
            <p className="text-gray-400 mb-8">
              I craft clean and interactive user experiences with modern
              front-end technologies.
            </p>
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-black transition-colors"
            >
              View CV
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <section
        id="projects"
        className="px-6 md:px-20 py-16 border-t border-gray-800"
      >
        {" "}
        <div className="max-w-screen-lg mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">Projects</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Placeholder for project cards */}
            <div className="bg-gray-900 p-6 rounded-xl">Project 1</div>
            <div className="bg-gray-900 p-6 rounded-xl">Project 2</div>
            <div className="bg-gray-900 p-6 rounded-xl">Project 3</div>
            <div className="bg-gray-900 p-6 rounded-xl">Project 4</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="px-6 md:px-20 py-16 border-t border-gray-800"
      >
        <div className="max-w-screen-lg mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>
          <p className="text-gray-400 mb-6 max-w-md">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
          <form className="max-w-lg space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-black border border-gray-700 px-4 py-3 rounded-lg text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-black border border-gray-700 px-4 py-3 rounded-lg text-white focus:outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full bg-black border border-gray-700 px-4 py-3 rounded-lg text-white focus:outline-none h-32"
            ></textarea>
            <button className="text-green-500 border-b-2 border-green-500 hover:text-white hover:border-white">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default App;

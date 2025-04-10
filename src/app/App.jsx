import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
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
    <main>
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-gray-800">
        <nav className="flex justify-between items-center px-6 py-4 w-full">
          <h1 className="text-xl font-bold">Brankica Kostic</h1>
          <ul className="flex gap-6 text-gray-400">
            {renderLink("hero", "Home")}
            {renderLink("skills", "Skills")}
            {renderLink("projects", "Projects")}
            {renderLink("contact", "Contact")}
          </ul>
        </nav>
      </header>
      {/* Hero Section */}
      <Hero />
      <About />
      {/* Skills Section */}
      <Skills />
      {/* Projects Section */}
      <Projects />
      {/* Contact Section */}
      <Contact />
      <Footer />
    </main>
  );
}

export default App;

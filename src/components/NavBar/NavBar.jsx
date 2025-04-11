import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);

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
    <a
      href={`#${id}`}
      onClick={() => setIsOpen(false)}
      className={`block px-4 py-2 transition-colors duration-200 hover:text-green-500 ${
        activeSection === id ? "text-green-500" : "text-neutral-400"
      }`}
    >
      {activeSection === id ? `<${label} />` : label}
    </a>
  );

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm border-b border-neutral-800 dark:border-neutral-700">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Left side – logo ili prazno */}
        <div className="text-green-500 font-semibold">
          {/* <Portfolio /> */}
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-6 text-base text-neutral-800 dark:text-neutral-300">
          {renderLink("hero", "Home")}
          {renderLink("skills", "Skills")}
          {renderLink("projects", "Projects")}
          {renderLink("contact", "Contact")}
        </ul>

        {/* Mobile icon right aligned */}
        <div className="md:hidden">
          <button
            className="text-green-500 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900/80 backdrop-blur-md dark:bg-neutral-900 px-4 sm:px-6 pb-4">
          <ul className="flex flex-col space-y-2 text-base text-neutral-300">
            {renderLink("hero", "Home")}
            {renderLink("skills", "Skills")}
            {renderLink("projects", "Projects")}
            {renderLink("contact", "Contact")}
          </ul>
        </div>
      )}
    </nav>
  );
}

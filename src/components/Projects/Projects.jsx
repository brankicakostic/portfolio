const projects = [
  {
    title: "Multistep Form with Redux Saga",
    description:
      "A multi-step form with state management via Redux Saga. Features include conditional rendering, form validation, and step navigation.",
    tech: ["React", "Redux-Saga", "SCSS"],
    live: "#",
    code: "#",
    image: null,
  },
  {
    title: "i18n Integration with Google Docs",
    description:
      "Integrated Google Docs as a CMS to manage translations. Used Node.js to fetch content and populate i18next keys dynamically.",
    tech: ["React", "Node.js", "i18next"],
    live: "#",
    code: "#",
    image: null,
  },
  {
    title: "Lerna Monorepo with Shared UI",
    description:
      "Set up a modular monorepo architecture using Lerna. Created shared component libraries with reusable UI for multiple projects.",
    tech: ["Lerna", "React", "SCSS"],
    live: "#",
    code: "#",
    image: null,
  },
  {
    title: "Personal Portfolio",
    description:
      "A minimalist dark-themed portfolio built with Vite and React, styled with Tailwind CSS and SCSS. Features custom animations and responsive design.",
    tech: ["React", "Vite", "Tailwind", "SCSS"],
    live: "#",
    code: "#",
    image: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-semibold mb-12 border-b-4 inline-block border-green-500">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              {/* Project Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl mb-4"
                />
              )}

              {/* Title */}
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>

              {/* Description */}
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 text-sm text-green-400 mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-zinc-800 px-2 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              {/*   <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 underline hover:text-green-300 transition"
                >
                  Live
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 underline hover:text-green-300 transition"
                >
                  Code
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

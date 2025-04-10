import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiJquery,
  SiSass,
  SiBootstrap,
  SiTailwindcss,
  SiRedux,
  SiReduxsaga,
  SiWebpack,
  SiBabel,
  SiGulp,
  SiGit,
  SiGraphql,
} from "@icons-pack/react-simple-icons";

const Skills = () => {
  return (
    <section id="skills" className="px-6 md:px-20 py-16 ">
      <div className="max-w-screen-lg mx-auto px-6 ">
        <h2
          className="text-3xl font-semibold mb-10 border-b-4 inline-block border-green-500
"
        >
          Skills
        </h2>
        <div className="grid grid-cols-4 gap-8 place-items-center">
          <div>
            <SiHtml5 color="#E34F26" size={48} />
          </div>
          <div>
            <SiCss3 color="#1572B6" size={48} />
          </div>
          <div>
            <SiJavascript color="#F7DF1E" size={48} />
          </div>
          <div>
            <SiReact color="#61DAFB" size={48} />
          </div>
          <div>
            <SiNodedotjs color="#339933" size={48} />
          </div>
          <div>
            <SiJquery color="#0769AD" size={48} />
          </div>
          <div>
            <SiSass color="#CC6699" size={48} />
          </div>
          <div>
            <SiBootstrap color="#7952B3" size={48} />
          </div>
          <div>
            <SiTailwindcss color="#06B6D4" size={48} />
          </div>
          <div>
            <SiRedux color="#764ABC" size={48} />
          </div>
          <div>
            <SiReduxsaga color="#999999" size={48} />
          </div>
          <div>
            <SiWebpack color="#8DD6F9" size={48} />
          </div>
          <div>
            <SiBabel color="#F9DC3E" size={48} />
          </div>
          <div>
            <SiGulp color="#DA4648" size={48} />
          </div>
          <div>
            <SiGit color="#F05032" size={48} />
          </div>
          <div>
            <SiGraphql color="#E10098" size={48} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

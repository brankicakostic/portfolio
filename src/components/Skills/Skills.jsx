import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiJquery,
  SiSass,
  SiBootstrap,
  SiMaterialdesign,
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
    <section>
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="grid grid-cols-4 gap-8">
          <SiHtml5 color="#E34F26" size={48} />
          <SiCss3 color="#1572B6" size={48} />
          <SiJavascript color="#F7DF1E" size={48} />
          <SiReact color="#61DAFB" size={48} />
          <SiNodedotjs color="#339933" size={48} />
          <SiJquery color="#0769AD" size={48} />
          <SiSass color="#CC6699" size={48} />
          <SiBootstrap color="#7952B3" size={48} />
          <SiMaterialdesign color="#757575" size={48} />
          <SiTailwindcss color="#06B6D4" size={48} />
          <SiRedux color="#764ABC" size={48} />
          <SiReduxsaga color="#999999" size={48} />
          <SiWebpack color="#8DD6F9" size={48} />
          <SiBabel color="#F9DC3E" size={48} />
          <SiGulp color="#DA4648" size={48} />
          <SiGit color="#F05032" size={48} />
          <SiGraphql color="#E10098" size={48} />
          {/*       <SiAmazonaws color="#232F3E" size={48} />
           */}{" "}
          {/* Dodaj ostale ikonice na sličan način */}
        </div>
      </div>
    </section>
  );
};

export default Skills;

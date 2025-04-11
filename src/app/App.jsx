import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function App() {
  document.documentElement.classList.toggle("dark");
  return (
    <main>
      {/* NavBar */}
      <NavBar />
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

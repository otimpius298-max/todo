import About from "./components/About";
import Contact from "./components/Contact";
import Article from "./components/Article";
import Head from "./components/head";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
        <Article />
        <Contact />
        <Projects title="My Project" description="Project 1" />
        <Head />
        <Skills />
        <About />
        <Projects title="Web project" description="Project 2" />
        <Projects title="My E-shop" description="Online Shopping" />
      <Footer />
    </div>
  );
}
export default App;

import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Portofolio from "./components/Portofolio";
import Skills from "./components/Skills";
import Sidebar from "./components/Sidebar";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="flex bg-[#f8e6cb] text-[#2D1B0E]">
      <Sidebar />

      <main
        className="
          flex-1
          max-w-7xl
          mx-auto
          px-4
          md:px-10
          bg-[#f8e6cb]
          text-[#2D1B0E]
        "
      >
        <Hero />
        <About />
        <Skills />
        <Portofolio />
        <Experience />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}

export default App;
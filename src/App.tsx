import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Portofolio from "./components/Portofolio";
import Skills from "./components/Skills";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex bg-[#f8e6cb] text-[#2D1B0E]">
      <Sidebar />

      <main className="bg-[#f8e6cb] text-[#2D1B0E] flex-1 max-w-7xl mx-auto px-10">
        <Hero />
        <About />
        <Skills />
        <Portofolio />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;

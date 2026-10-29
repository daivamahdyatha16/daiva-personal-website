import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Portofolio from "./components/Portofolio";
import Skills from "./components/Skills";
import Sidebar from "./components/Sidebar";
import BackToTop from "./components/BackToTop";
import Testimonials from "./components/Testimonials";
import Divider from "./components/Divider";

function App() {
  return (
    <div className="flex text-[#2D1B0E]">
      <Sidebar />

      <main
        className="
          flex-1
          min-w-0
          max-w-7xl
          mx-auto
          px-4
          pt-14
          md:pt-0
          md:px-10
          text-[#2D1B0E]
        "
      >
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Portofolio />
        <Divider />
        <Experience />
        <Divider />
        <Testimonials />
        <Divider />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}

export default App;

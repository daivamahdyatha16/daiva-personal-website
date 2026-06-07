function Hero() {
  return (
    <section
      id="hero"
      className="py-16 flex gap-12 border-b border-[#8B6B3D] mx-auto
"
    >
      <div className="max-w-3xl flex-1">
        <p className="uppercase tracking-[0.3em] text-sm">Chapter I</p>
        <h1
          className="text-[5rem] font-bold"
          style={{ fontFamily: "Playfair Display" }}
        >
          Daiva Mahdyatha
        </h1>

        <h2
          className="text-2xl font-semibold mt-4"
          style={{ fontFamily: "Playfair Display" }}
        >
          System Analyst | Full-Stack Developer
        </h2>

        <p className="mt-6 max-w-2xl">
          Exploring technology, improving systems, and building meaningful
          solutions.
        </p>

        <p className="mt-4 max-w-2xl">
          Currently working in the IT Division of Indonesian Immigration, with
          experience in application testing and business development.
        </p>

        <p className="mt-4 max-w-2xl">
          Now expanding my journey into Full Stack Development.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#portfolio"
            className="
                px-6 py-3
                bg-[#8B6B3D]
                text-white
                rounded-md
                transition-all
                duration-300
                hover:bg-[#6f542e]
                hover:-translate-y-1"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="
                px-6 py-3
                border border-[#8B6B3D]
                rounded-md
                transition-all
                duration-300
                hover:bg-[#8B6B3D]
                hover:text-white
                "
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="flex-1 flex justify-center items-center">
          <img
            src="src/assets/images/daiva.png"
            alt="Daiva Sketch"
            className="w-[420px] object-contain mix-blend-multiply drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

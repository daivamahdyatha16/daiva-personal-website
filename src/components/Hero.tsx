function Hero() {
  return (
    <section
      id="hero"
      className="
        py-10 md:py-20
        flex flex-col-reverse md:flex-row
        items-center
        justify-between
        gap-10 md:gap-16
        border-b border-[#8B6B3D]
      "
    >
      {/* LEFT SIDE */}
      <div className="flex-1 w-full">
        <p className="uppercase tracking-[0.3em] text-xs md:text-sm">
          Chapter I
        </p>

        <h1
          className="
            mt-2
            text-5xl
            sm:text-6xl
            lg:text-[5rem]
            font-bold
            leading-[0.95]
          "
          style={{ fontFamily: "Playfair Display" }}
        >
          Daiva Mahdyatha
        </h1>

        <h2
          className="
            mt-4
            text-lg
            md:text-2xl
            font-semibold
          "
          style={{ fontFamily: "Playfair Display" }}
        >
          System Analyst | Full-Stack Developer
        </h2>

        <p className="mt-6 max-w-xl">
          Exploring technology, improving systems, and building meaningful
          solutions.
        </p>

        <p className="mt-4 max-w-xl">
          Currently working in the IT Division of Indonesian Immigration,
          with experience in application testing and business development.
        </p>

        <p className="mt-4 max-w-xl">
          Now expanding my journey into Full Stack Development.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#portfolio"
            className="
              px-6 py-3
              bg-[#8B6B3D]
              text-white
              rounded-md
              transition-all duration-300
              hover:bg-[#6f542e]
              hover:-translate-y-1
            "
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="
              px-6 py-3
              border border-[#8B6B3D]
              rounded-md
              transition-all duration-300
              hover:bg-[#8B6B3D]
              hover:text-white
            "
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-center flex-1 w-full">
        <img
          src="src/assets/images/daiva.png"
          alt="Daiva"
          className="
            w-48
            sm:w-64
            md:w-80
            lg:w-[420px]
            object-contain
            mix-blend-multiply
            drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)]
          "
        />
      </div>
    </section>
  );
}

export default Hero;
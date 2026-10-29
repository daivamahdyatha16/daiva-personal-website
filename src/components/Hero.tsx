import daivaImg from "../assets/images/daiva.webp";

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
      "
        >
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

            <div className="flex justify-center flex-1 w-full">
                <div className="relative">
                <div
                    aria-hidden="true"
                    className="
                            absolute
                            inset-x-[4%]
                            top-[12%]
                            bottom-0
                            rounded-t-full
                            bg-gradient-to-b
                            from-[#e9cd9f]/80
                            to-[#e2bf8a]/60
                        "
                ></div>
                <img
                    src={daivaImg}
                    alt="Daiva Mahdyatha"
                    width={407}
                    height={612}
                    loading="eager"
                    className="
                            relative
                            w-44
                            sm:w-64
                            md:w-80
                            lg:w-[420px]
                            object-contain
                            mix-blend-multiply
                        "
                />
                </div>
            </div>
        </section>
    );
}

export default Hero;
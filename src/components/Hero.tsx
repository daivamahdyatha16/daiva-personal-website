function Hero() {
    return (
        <section id="hero" className="py-16">
            <p className="uppercase tracking-[0.3em] text-sm">Chapter I</p>
            <h1 className="text-6xl font-bold"
            style={{ fontFamily: 'Playfair Display' }}>
                Daiva Mahdyatha
            </h1>


            <h2 className="text-2xl font-semibold mt-4"
            style={{ fontFamily: 'Playfair Display' }}>
                Renaissance Geek
            </h2>

            <p className="mt-6 max-w-2xl">Exploring technology,improving systems,
                and building meaningful solutions.</p>

            <p>Currently working in the IT Division of Indonesian Immigration,
                with experience in application testing and business development.</p>

            <p>Now expanding my journey into Full Stack Development.</p>

            <button>Explore My Work</button>
            <button>
                Contact Me
            </button>
        </section>
    );
}

export default Hero;
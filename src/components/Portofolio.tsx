function Portfolio() {
  return (
    <section id="portfolio" className="py-12">
      <p className="uppercase tracking-[0.3em] text-sm">Chapter IV</p>

      <h2 className="text-4xl font-bold"
      style={{ fontFamily: 'Playfair Display' }}>
        Projects
      </h2>

      <section className="flex flex-row gap-6">
        <div className="border p-6 my-6 flex-1">
          <h3>Visa Web Application Testing</h3>

          <p>
            Application testing and quality assurance activities for immigration
            digital services.
          </p>

          <button>View Project</button>
        </div>

        <div className="border p-6 my-6 flex-1">
          <h3>Personal Portfolio Website</h3>

          <p>
            A personal portfolio website built using React, TypeScript, and
            Tailwind CSS.
          </p>

          <button>View Project</button>
        </div>

        <div className="border p-6 my-6 flex-1">
          <h3>Full Stack Development Journey</h3>

          <p>
            Documenting projects, learning progress, and future development
            work.
          </p>

          <button>View Project</button>
        </div>
      </section>
    </section>
  );
}

export default Portfolio;

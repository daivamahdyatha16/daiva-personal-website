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
          <h3 className="text-xl font-bold mb-2">Visa Web Application</h3>

          <p className="mb-4">
            Application for immigration
            digital services.
          </p>

          <button className="px-4 py-2 bg-[#8B6B3D] text-white rounded hover:bg-[#7a5c33] transition-colors duration-300">
            <a href="https://evisa.imigrasi.go.id/"
            target="_blank"
            rel="noopener noreferrer" className="text-white hover:text-black transition-colors duration-300">
              View Project
            </a>
          </button>
        </div>

        <div className="border p-6 my-6 flex-1">
          <h3 className="text-xl font-bold mb-2">Personal Portfolio Website</h3>

          <p className="mb-4">
            A personal portfolio website built using React, TypeScript, and
            Tailwind CSS.
          </p>

          <button className="px-4 py-2 bg-[#8B6B3D] text-white rounded hover:bg-[#7a5c33] transition-colors duration-300">
            <a href="https://your-portfolio-link.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black transition-colors duration-300">
              View Project
            </a>
          </button>
        </div>

        <div className="border p-6 my-6 flex-1">
          <h3 className="text-xl font-bold mb-2">Full Stack Development Journey</h3>

          <p className="mb-4">
            Documenting projects, learning progress, and future development
            work.
          </p>

          <button className="px-4 py-2 bg-[#8B6B3D] text-white rounded hover:bg-[#7a5c33] transition-colors duration-300">
            <a href="https://your-portfolio-link.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black transition-colors duration-300">
              View Project
            </a>
          </button>
        </div>
      </section>
    </section>
  );
}

export default Portfolio;

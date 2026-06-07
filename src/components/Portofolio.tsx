function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-12 border-b border-[#8B6B3D]"
    >
      <p className="uppercase tracking-[0.3em] text-sm">
        Chapter IV
      </p>

      <h2
        className="text-4xl font-bold"
        style={{ fontFamily: "Playfair Display" }}
      >
        Projects
      </h2>

      <div className="grid grid-cols-3 gap-6 mt-8">

        <div
          className="
          border border-[#8B6B3D]
          p-6
          flex flex-col
          hover:-translate-y-2
          hover:shadow-lg
          transition-all duration-300
          "
        >
          <span className="text-xs uppercase tracking-widest text-[#8B6B3D] mb-4">
            Production
          </span>

          <h3 className="text-xl font-bold mb-3">
            Visa Web Application
          </h3>

          <p className="mb-4 flex-grow">
            Application for Indonesian immigration
            digital visa services.
          </p>

          <div className="flex gap-2 flex-wrap mb-6">
            <span className="border px-2 py-1 text-xs rounded">
              Immigration
            </span>
            <span className="border px-2 py-1 text-xs rounded">
              Digital Service
            </span>
          </div>

          <a
            href="https://evisa.imigrasi.go.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-block
            px-4 py-2
            bg-[#8B6B3D]
            text-white
            rounded
            hover:bg-[#6f542e]
            transition-colors
            "
          >
            View Project
          </a>
        </div>

        <div
          className="
          border border-[#8B6B3D]
          p-6
          flex flex-col
          hover:-translate-y-2
          hover:shadow-lg
          transition-all duration-300
          "
        >
          <span className="text-xs uppercase tracking-widest text-[#8B6B3D] mb-4">
            Current
          </span>

          <h3 className="text-xl font-bold mb-3">
            Personal Portfolio Website
          </h3>

          <p className="mb-4 flex-grow">
            Personal portfolio website built using React,
            TypeScript and Tailwind CSS.
          </p>

          <div className="flex gap-2 flex-wrap mb-6">
            <span className="border px-2 py-1 text-xs rounded">
              React
            </span>
            <span className="border px-2 py-1 text-xs rounded">
              TypeScript
            </span>
            <span className="border px-2 py-1 text-xs rounded">
              Tailwind
            </span>
          </div>

          <a
            href="https://your-portfolio-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-block
            px-4 py-2
            bg-[#8B6B3D]
            text-white
            rounded
            hover:bg-[#6f542e]
            transition-colors
            "
          >
            View Project
          </a>
        </div>

        <div
          className="
          border border-[#8B6B3D]
          p-6
          flex flex-col
          hover:-translate-y-2
          hover:shadow-lg
          transition-all duration-300
          "
        >
          <span className="text-xs uppercase tracking-widest text-[#8B6B3D] mb-4">
            Learning
          </span>

          <h3 className="text-xl font-bold mb-3">
            Full Stack Development Journey
          </h3>

          <p className="mb-4 flex-grow">
            Documenting projects, learning progress,
            coding challenges and future development work.
          </p>

          <div className="flex gap-2 flex-wrap mb-6">
            <span className="border px-2 py-1 text-xs rounded">
              React
            </span>
            <span className="border px-2 py-1 text-xs rounded">
              Node.js
            </span>
            <span className="border px-2 py-1 text-xs rounded">
              Learning
            </span>
          </div>

          <a
            href="https://your-portfolio-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-block
            px-4 py-2
            bg-[#8B6B3D]
            text-white
            rounded
            hover:bg-[#6f542e]
            transition-colors
            "
          >
            View Project
          </a>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;
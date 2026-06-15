import { useState } from "react";

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section
      id="portfolio"
      className="py-12 border-b border-[#8B6B3D]"
    >
      <p className="uppercase tracking-[0.3em] text-sm">
        Chapter IV
      </p>

      <h2
        className="text-4xl font-bold mb-8"
        style={{ fontFamily: "Playfair Display" }}
      >
        Projects & Creations
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="border border-[#8B6B3D] p-4 rounded-xl hover:shadow-lg transition-all duration-300">
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src="./src/assets/images/evisa.png"
              alt="Visa Project"
              className="
        w-full
        h-52
        object-cover
        transition-all
        duration-500
        group-hover:scale-105
      "
            />

            <span
              className="
        absolute
        top-3
        right-3
        bg-[#8B6B3D]
        text-white
        text-xs
        px-3
        py-1
        rounded-full
      "
            >
              Production
            </span>
          </div>

          <div className="mt-4">


            <h3 className="text-xl font-bold mt-2">
              Visa Application Platform
            </h3>

            <p className="mt-3 text-sm text-[#5A4630] leading-relaxed">
              Supporting digital visa services through application
              testing, business validation, and workflow verification.
            </p>



            <button
              onClick={() => setSelectedProject("visa")}
              className="
        mt-5
        text-[#8B6B3D]
        font-semibold
        hover:translate-x-1
        transition-all
        duration-300
      "
            >
              View Content →
            </button>
          </div>
        </div>

        <div className="border border-[#8B6B3D] p-4 rounded-md">
          <img
              src="./src/assets/images/evisa.png"
              alt="Visa Project"
              className="
        w-full
        h-52
        object-cover
        transition-all
        duration-500
        group-hover:scale-105
      "
            />

            <span
              className="
        absolute
        top-3
        right-3
        bg-[#8B6B3D]
        text-white
        text-xs
        px-3
        py-1
        rounded-full
      "
            >
              Production
            </span>


          <h3 className="text-xl font-bold mt-2">
            Brandywine Services Website
          </h3>

          <p className="mt-3 text-sm">
            A conversion-focused website designed for a modern note-taking company, 
            featuring responsive layouts, strong calls-to-action, and customer engagement pages.
          </p>

          <button
            onClick={() => setSelectedProject("portfolio")}
            className="mt-4 text-[#8B6B3D] font-semibold hover:underline"
          >
            View Content →
          </button>
        </div>

        <div className="border border-[#8B6B3D] p-4 rounded-md">
          <img
              src="./src/assets/images/evisa.png"
              alt="Visa Project"
              className="
        w-full
        h-52
        object-cover
        transition-all
        duration-500
        group-hover:scale-105
      "
            />

            <span
              className="
        absolute
        top-3
        right-3
        bg-[#8B6B3D]
        text-white
        text-xs
        px-3
        py-1
        rounded-full
      "
            >
              Production
            </span>

          <h3 className="text-xl font-bold mt-2">
            Full Stack Development Journey
          </h3>

          <p className="mt-3 text-sm">
            Documenting coding challenges,
            learning progress, and future projects.
          </p>

          <button
            onClick={() => setSelectedProject("journey")}
            className="mt-4 text-[#8B6B3D] font-semibold hover:underline"
          >
            View Content →
          </button>
        </div>
      </div>

      {selectedProject && (
        <div
          className="
            fixed inset-0
            bg-black/50
            flex justify-center items-center
            z-50
            p-4
          "
        >
          <div
            className="
              bg-[#f8e6cb]
              text-[#2D1B0E]
              max-w-3xl
              w-full
              p-8
              rounded-lg
              max-h-[90vh]
              overflow-y-auto
            "
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="float-right text-xl"
            >
              ✕
            </button>

            {selectedProject === "visa" && (
              <>
                <h2
                  className="text-3xl font-bold mb-6"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  📜 Visa Web Application
                </h2>

                <h3 className="text-2xl font-semibold mb-4">
                  STAR Method
                </h3>

                <p><strong>Situation</strong></p>
                <p className="mb-4">
                  Indonesian Immigration required a reliable
                  digital visa platform to support online visa services.
                </p>

                <p><strong>Task</strong></p>
                <p className="mb-4">
                  Support quality assurance activities through
                  testing and business validation.
                </p>

                <p><strong>Action</strong></p>
                <ul className="list-disc ml-6 mb-4">
                  <li>Conducted application testing</li>
                  <li>Validated business requirements</li>
                  <li>Documented bugs and findings</li>
                  <li>Collaborated with stakeholders</li>
                </ul>

                <p><strong>Result</strong></p>
                <p className="mb-4">
                  Improved application stability and supported
                  successful delivery of digital visa services.
                </p>

                <p><strong>Tags</strong></p>

                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="border px-2 py-1 rounded">
                    Digital Service
                  </span>
                  <span className="border px-2 py-1 rounded">
                    Application
                  </span>
                  <span className="border px-2 py-1 rounded">
                    Production
                  </span>
                </div>
                <div className="mt-6 flex gap-4 flex-wrap">
                  <a
                    href="https://evisa.imigrasi.go.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-5 py-2
                      bg-[#8B6B3D]
                      text-white
                      rounded-md
                      transition-all
                      duration-300
                      hover:bg-[#6f542e]
                      hover:-translate-y-1
                              "
                  >
                    Visit Application →
                  </a>


                </div>
              </>
            )}

            {selectedProject === "portfolio" && (
              <>
                <h2
                  className="text-3xl font-bold mb-6"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  📜 Brandywine Services Website

                </h2>

                

                <p><strong>Situation</strong></p>
                <p className="mb-4">
                  Brandywine Services, a company specializing in innovative note-taking solutions, required a modern website that would help increase customer engagement and conversions. 
                  The target audience consisted primarily of married couples, with an emphasis on trust, security, and approachability.
                </p>

                <p><strong>Task</strong></p>
                <p className="mb-4">
                  Design and develop a responsive multi-page website that makes it easy for potential customers to contact the company, explore products, and engage with content. The website needed a landing page, contact page, shop page, and blog, 
                  while prominently encouraging visitors to request a free sample.
                </p>

                <p><strong>Action</strong></p>
                <ul className="list-disc ml-6 mb-4">
                  <li>Designed a modern landing page using a green-centered visual identity</li>
                  <li>Created responsive layouts for desktop and mobile devices.</li>
                  <li>Developed reusable React components.</li>
                  <li>Implemented navigation for Contact, Shop, and Blog pages.</li>
                  <li>Built a dedicated "Our Values" section to communicate the company’s mission and values.</li>
                  <li>Added clear call-to-action elements to maximize conversion opportunities.</li>
                </ul>

                <p><strong>Result</strong></p>
                <ul className="list-disc ml-6 mb-4">
                  <li>Delivered a complete multi-page website concept aligned with the client's branding requirements.</li>
                  <li>Improved user navigation and accessibility across devices.</li>
                  <li>Successfully highlighted the company's values and products through a conversion-oriented design.</li>
                  <li>Implemented navigation for Contact, Shop, and Blog pages.</li>
                  <li>Built a dedicated "Our Values" section to communicate the company’s mission and values.</li>
                  <li>Demonstrated practical frontend development and UI implementation skills.</li>
                </ul>
                <p><strong>Tags</strong></p>

                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="border px-2 py-1 rounded">
                    Testing
                  </span>
                  <span className="border px-2 py-1 rounded">
                    Analysis
                  </span>
                  <span className="border px-2 py-1 rounded">
                    Development
                  </span>
                </div>
                
              </>
            )}

            {selectedProject === "journey" && (
              <>
                <h2
                  className="text-3xl font-bold mb-6"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  📜 Manuscript III
                </h2>

                <h3 className="text-2xl font-semibold mb-4">
                  Full Stack Development Journey
                </h3>

                <p><strong>Situation</strong></p>
                <p className="mb-4">
                  Transitioning from System Analysis into Software Engineering.
                </p>

                <p><strong>Task</strong></p>
                <p className="mb-4">
                  Build practical development skills.
                </p>

                <p><strong>Action</strong></p>
                <p className="mb-4">
                  Completed projects, coding challenges,
                  and explored frontend/backend technologies.
                </p>

                <p><strong>Result</strong></p>
                <p className="mb-4">
                  Built a strong foundation for future full stack projects.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
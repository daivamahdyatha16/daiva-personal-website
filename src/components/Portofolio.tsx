import SectionTitle from "./SectionTitle";
import { useEffect, useState } from "react";
import evisaImg from "../assets/images/evisa.webp";
import brandywineImg from "../assets/images/brandywine.webp";
import melodynestImg from "../assets/images/melodynest.webp";

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previousFocus?.focus();
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-16">
      <SectionTitle chapter="IV" title="Projects & Creations" className="mb-8" />

      <div className="grid md:grid-cols-3 gap-6">
        <div className="paper-card p-4 transition-all duration-300 hover:-translate-y-1">
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src={evisaImg}
              alt="Visa Project"
              loading="lazy"
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
              An online visa application platform designed to streamline
              immigration services, improve user experience, and ensure reliable
              digital workflows.
            </p>

            <button
              onClick={() => setSelectedProject("visa")}
              className="
        mt-5
        text-[#6f542e]
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

        <div className="paper-card p-4 transition-all duration-300 hover:-translate-y-1">
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src={brandywineImg}
              alt="Brandywine Project"
              loading="lazy"
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
              On Progress
            </span>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold mt-2">
              Brandywine Services Website
            </h3>

            <p className="mt-3 text-sm text-[#5A4630] leading-relaxed">
              A conversion-focused website designed for a modern note-taking
              company, featuring responsive layouts, strong calls-to-action, and
              customer engagement pages.
            </p>

            <button
              onClick={() => setSelectedProject("brandywine")}
              className="
        mt-5
        text-[#6f542e]
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

        <div className="paper-card p-4 transition-all duration-300 hover:-translate-y-1">
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src={melodynestImg}
              alt="Melodynest Project"
              loading="lazy"
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
              On Progress
            </span>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold mt-2">
              MelodyNest Music Platform
            </h3>

            <p className="mt-3 text-sm text-[#5A4630] leading-relaxed">
              A music discovery platform designed for college students, combining
              nostalgic branding, customer support, and modern user experiences.
            </p>

            <button
              onClick={() => setSelectedProject("melody")}
              className="
        mt-5
        text-[#6f542e]
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
          onClick={() => setSelectedProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(e) => e.stopPropagation()}
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
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              autoFocus
              className="float-right text-xl"
            >
              ✕
            </button>

            {selectedProject === "visa" && (
              <>
                <h2
                  id="project-modal-title"
                  className="text-3xl font-bold mb-6"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  📜 Visa Web Application
                </h2>

                <h3 className="text-2xl font-semibold mb-4">STAR Method</h3>

                <p>
                  <strong>Situation</strong>
                </p>
                <p className="mb-4">
                  Indonesian Immigration required a reliable digital visa
                  platform to support online visa services.
                </p>

                <p>
                  <strong>Task</strong>
                </p>
                <p className="mb-4">
                  Support quality assurance activities through testing and
                  business validation.
                </p>

                <p>
                  <strong>Action</strong>
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li>Conducted application testing</li>
                  <li>Validated business requirements</li>
                  <li>Documented bugs and findings</li>
                  <li>Collaborated with stakeholders</li>
                </ul>

                <p>
                  <strong>Result</strong>
                </p>
                <p className="mb-4">
                  Improved application stability and supported successful
                  delivery of digital visa services.
                </p>

                <p>
                  <strong>Tags</strong>
                </p>

                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-[#8B6B3D]/10 text-sm">
                    Digital Service
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#8B6B3D]/10 text-sm">Application</span>
                  <span className="px-3 py-1 rounded-full bg-[#8B6B3D]/10 text-sm">Production</span>
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

            {selectedProject === "brandywine" && (
              <>
                <h2
                  id="project-modal-title"
                  className="text-3xl font-bold mb-6"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  📜 Brandywine Services Website
                </h2>
                <h3 className="text-2xl font-semibold mb-4">STAR Method</h3>
                <p>
                  <strong>Situation</strong>
                </p>
                <p className="mb-4">
                  Brandywine Services, a company specializing in innovative
                  note-taking solutions, required a modern website that would
                  help increase customer engagement and conversions. The target
                  audience consisted primarily of married couples, with an
                  emphasis on trust, security, and approachability.
                </p>

                <p>
                  <strong>Task</strong>
                </p>
                <p className="mb-4">
                  Design and develop a responsive multi-page website that makes
                  it easy for potential customers to contact the company,
                  explore products, and engage with content. The website needed
                  a landing page, contact page, shop page, and blog, while
                  prominently encouraging visitors to request a free sample.
                </p>

                <p>
                  <strong>Action</strong>
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li>
                    Designed a modern landing page using a green-centered visual
                    identity
                  </li>
                  <li>
                    Created responsive layouts for desktop and mobile devices.
                  </li>
                  <li>Developed reusable React components.</li>
                  <li>
                    Implemented navigation for Contact, Shop, and Blog pages.
                  </li>
                  <li>
                    Built a dedicated "Our Values" section to communicate the
                    company’s mission and values.
                  </li>
                  <li>
                    Added clear call-to-action elements to maximize conversion
                    opportunities.
                  </li>
                </ul>

                <p>
                  <strong>Result</strong>
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li>
                    Delivered a complete multi-page website concept aligned with
                    the client's branding requirements.
                  </li>
                  <li>
                    Improved user navigation and accessibility across devices.
                  </li>
                  <li>
                    Successfully highlighted the company's values and products
                    through a conversion-oriented design.
                  </li>
                  <li>
                    Implemented navigation for Contact, Shop, and Blog pages.
                  </li>
                  <li>
                    Built a dedicated "Our Values" section to communicate the
                    company’s mission and values.
                  </li>
                  <li>
                    Demonstrated practical frontend development and UI
                    implementation skills.
                  </li>
                </ul>
                <p>
                  <strong>Tags</strong>
                </p>

                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-[#8B6B3D]/10 text-sm">Testing</span>
                  <span className="px-3 py-1 rounded-full bg-[#8B6B3D]/10 text-sm">Analysis</span>
                  <span className="px-3 py-1 rounded-full bg-[#8B6B3D]/10 text-sm">Development</span>
                </div>
              </>
            )}

            {selectedProject === "melody" && (
              <>
                <h2
                  id="project-modal-title"
                  className="text-3xl font-bold mb-6"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  📜 MelodyNest Music Platform
                </h2>

                <h3 className="text-2xl font-semibold mb-4">STAR Method</h3>

                <p>
                  <strong>Situation</strong>
                </p>
                <p className="mb-4">
                  MelodyNest is a music discovery company focused on helping
                  college students explore new music through innovative
                  technology and offline accessibility. The company needed a
                  modern website that would increase conversions while
                  maintaining a friendly, nostalgic, and approachable brand
                  identity.
                </p>

                <p>
                  <strong>Task</strong>
                </p>
                <p className="mb-4">
                  Design and develop a responsive multi-page website that
                  provides customer support and encourages users to try the
                  platform. The website needed a Landing Page, About Page,
                  Product Pages, and Privacy Policy Page, along with a clear
                  call-to-action encouraging visitors to request a free sample.
                </p>

                <p>
                  <strong>Action</strong>
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li>
                    Designed a modern blue-themed user interface aligned with
                    the company's branding.
                  </li>
                  <li>
                    Created a conversion-focused landing page with prominent
                    call-to-action sections.
                  </li>
                  <li>
                    Developed an "About the Team" section to build trust and
                    strengthen the company's friendly image.
                  </li>
                  <li>
                    Designed dedicated Product, About, and Privacy Policy pages.
                  </li>
                  <li>
                    Implemented responsive layouts to ensure a seamless
                    experience across desktop and mobile devices.
                  </li>
                  <li>
                    Structured content to guide users toward requesting a free
                    sample and contacting customer support.
                  </li>
                </ul>

                <p>
                  <strong>Result</strong>
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li>
                    Delivered a complete website concept tailored to the target
                    audience of college students
                  </li>
                  <li>
                    Successfully balanced nostalgia, friendliness, and modern
                    design principles.
                  </li>
                  <li>Improved user navigation and content accessibility.</li>
                  <li>
                    Created a conversion-oriented user journey that supports
                    customer engagement and lead generation.
                  </li>
                </ul>
                 <p>
                  <strong>Tags</strong>
                </p>

                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-[#8B6B3D]/10 text-sm">Music Discovery</span>
                  <span className="px-3 py-1 rounded-full bg-[#8B6B3D]/10 text-sm">Responsive Design</span>
                  <span className="px-3 py-1 rounded-full bg-[#8B6B3D]/10 text-sm">Development</span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;

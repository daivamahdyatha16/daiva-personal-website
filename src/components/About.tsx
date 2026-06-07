import {
  FaBriefcase,
  FaBuilding,
  FaClipboardCheck,
  FaCode,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="py-12 border-b border-[#8B6B3D]">
      <p className="uppercase tracking-[0.3em] text-sm">Chapter II</p>

      <h2
        className="text-4xl font-bold"
        style={{ fontFamily: "Playfair Display" }}
      >
        About Me
      </h2>

      <div className="flex gap-16 mt-8">
        
        <div className="flex-1">
          <p className="max-w-2xl">
            My career began in the Indonesian Immigration IT Division, where I
            developed experience in application testing, requirements analysis,
            and digital service improvement.
          </p>

          <p className="mt-10 max-w-2xl">
            Working closely with systems, stakeholders, and business processes
            has given me a practical understanding of how technology creates
            real-world impact.
          </p>

          <p className="mt-10 max-w-2xl">
            Today, I am expanding my expertise into Full Stack Development,
            combining analytical thinking with modern web technologies to build
            scalable and meaningful digital solutions.
          </p>
        </div>

        
        <div className="w-80">
          <div className="border border-[#8B6B3D] p-6 rounded-md">
            <h3
              className="text-xl font-semibold mb-5"
              style={{ fontFamily: "Playfair Display" }}
            >
              Personal Details
            </h3>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FaBriefcase className="text-[#8B6B3D]" />
                <span>5+ Years in IT & Digital Services</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#8B6B3D]" />
                <span>Padang, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <FaBuilding className="text-[#8B6B3D]" />
                <span>Directorate General of Immigration</span>
              </li>

              <li className="flex items-center gap-3">
                <FaClipboardCheck className="text-[#8B6B3D]" />
                <span>Application Testing & Business Analysis</span>
              </li>

              <li className="flex items-center gap-3">
                <FaCode className="text-[#8B6B3D]" />
                <span>Learning Full Stack Development</span>
              </li>

              <li className="flex items-center gap-3">
                <FaGlobe className="text-[#8B6B3D]" />
                <span>Open to Remote & Hybrid Opportunities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

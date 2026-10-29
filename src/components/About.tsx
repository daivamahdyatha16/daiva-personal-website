import SectionTitle from "./SectionTitle";
import {
  FaBriefcase,
  FaBuilding,
  FaClipboardCheck,
  FaCode,
  FaMapMarkerAlt,
  FaGlobe,
  FaClock,
  FaSearch,
  FaComments,
} from "react-icons/fa";

const principles = [
  {
    icon: FaClock,
    title: "On-Time Delivery",
    description: "Completing work according to agreed deadlines.",
  },
  {
    icon: FaSearch,
    title: "Attention to Detail",
    description: "Being thorough in testing, analysis, and implementation.",
  },
  {
    icon: FaComments,
    title: "Clear Communication",
    description: "Sharing progress and obstacles openly with the team.",
  },
];

function About() {
  return (
    <section id="about" className="py-16">
      <SectionTitle chapter="II" title="About Me" />

      <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-8">
        
        <div className="flex-1">
          <p className="max-w-2xl first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:leading-[0.85] first-letter:font-bold first-letter:font-[Playfair_Display] first-letter:text-[#8B6B3D]">
            My career began in the Indonesian Immigration IT Division, where I
            developed experience in application testing, requirements analysis,
            and digital service improvement.
          </p>

          <p className="mt-4 max-w-2xl">
            Working closely with systems, stakeholders, and business processes
            has given me a practical understanding of how technology creates
            real-world impact.
          </p>

          <p className="mt-4 max-w-2xl">
            Today, I am expanding my expertise into Full Stack Development,
            combining analytical thinking with modern web technologies to build
            scalable and meaningful digital solutions.
          </p>
        </div>

        
        <div className="w-full md:w-80">
          <div className="paper-card p-6">
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

      <h3
        className="mt-12 text-2xl font-semibold"
        style={{ fontFamily: "Playfair Display" }}
      >
        Work Principles
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {principles.map(({ icon: Icon, title, description }) => (
          <div key={title} className="paper-card p-5">
            <Icon className="text-2xl text-[#8B6B3D] mb-3" />
            <p className="font-semibold">{title}</p>
            <p className="mt-2 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;

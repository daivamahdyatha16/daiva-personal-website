import SectionTitle from "./SectionTitle";
import {
  FaBug,
  FaChartLine,
  FaHandshake,
  FaFileAlt,
  FaComments,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaUsers,
  FaLightbulb,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaServer,
  FaSyncAlt,
  FaBookOpen,
} from "react-icons/fa";

import { SiExpress, SiJavascript, SiTypescript, SiVite } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import {
  MdApi,
  MdOutlineDeveloperMode,
  MdSystemSecurityUpdateGood,
} from "react-icons/md";
import { GiProcessor } from "react-icons/gi";

const skillGroups = [
  {
    title: "Front-End",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: FaReact },
    ],
  },
  {
    title: "Back-End",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "REST API", icon: MdApi },
      { name: "SQL", icon: FaDatabase },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "npm", icon: FaNpm },
      { name: "Vite", icon: SiVite },
      { name: "VS Code", icon: VscVscode },
    ],
  },
  {
    title: "Analysis & Systems",
    wide: true,
    skills: [
      { name: "Application Testing", icon: FaBug },
      { name: "Requirements Analysis", icon: FaChartLine },
      { name: "Business Analysis", icon: MdOutlineDeveloperMode },
      { name: "Process Improvement", icon: GiProcessor },
      { name: "Stakeholder Management", icon: FaUsers },
      { name: "System Analysis", icon: MdSystemSecurityUpdateGood },
      { name: "Data Management", icon: FaServer },
      { name: "Documentation", icon: FaFileAlt },
    ],
  },
  {
    title: "Professional",
    skills: [
      { name: "Communication", icon: FaComments },
      { name: "Collaboration", icon: FaHandshake },
      { name: "Problem Solving", icon: FaLightbulb },
      { name: "Adaptability", icon: FaSyncAlt },
      { name: "Continuous Learning", icon: FaBookOpen },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-16">
      <SectionTitle chapter="III" title="Skills" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className={`paper-card p-6 ${group.wide ? "xl:col-span-2" : ""}`}
          >
            <h3
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "Playfair Display" }}
            >
              {group.title}
            </h3>

            <ul className="flex flex-wrap gap-2">
              {group.skills.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-3
                    py-1.5
                    rounded-full
                    bg-[#8B6B3D]/10
                    text-sm
                    transition-colors
                    duration-300
                    hover:bg-[#8B6B3D]
                    hover:text-white
                  "
                >
                  <Icon className="text-base" />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

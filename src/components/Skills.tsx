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
} from "react-icons/fa";

import { SiJavascript, SiTypescript } from "react-icons/si";

import {
  MdOutlineDeveloperMode,
  MdSystemSecurityUpdateGood,
} from "react-icons/md";
import { GiProcessor } from "react-icons/gi";
function Skills() {
  const skillClass =
    "flex flex-col items-center transition-all duration-300 hover:-translate-y-1 hover:text-[#8B6B3D] cursor-default";

  return (
    <section id="skills" className="py-12 border-b border-[#8B6B3D]">
      <p className="uppercase tracking-[0.3em] text-sm">Chapter III</p>

      <h2
        className="text-4xl font-bold"
        style={{ fontFamily: "Playfair Display" }}
      >
        Skills
      </h2>

      <h3
        className="mt-8 text-2xl font-semibold"
        style={{ fontFamily: "Playfair Display" }}
      >
        Engineering
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-6 ">
        <div className={skillClass}>
          <FaHtml5 className="text-3xl mb-2" />
          <p className="text-center text-sm">HTML</p>
        </div>

        <div className={skillClass}>
          <FaCss3Alt className="text-3xl mb-2" />
          <p className="text-center text-sm">CSS</p>
        </div>

        <div className={skillClass}>
          <SiJavascript className="text-3xl mb-2" />
          <p className="text-center text-sm">JavaScript</p>
        </div>

        <div className={skillClass}>
          <SiTypescript className="text-3xl mb-2" />
          <p className="text-center text-sm">TypeScript</p>
        </div>

        <div className={skillClass}>
          <FaReact className="text-3xl mb-2" />
          <p className="text-center text-sm">React</p>
        </div>
      </div>

      <h3
        className="mt-10 text-2xl font-semibold"
        style={{ fontFamily: "Playfair Display" }}
      >
        Analysis
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-6 ">
        <div className={skillClass}>
          <FaBug className="text-3xl mb-2" />
          <p className="text-center text-sm">Application Testing</p>
        </div>

        <div className={skillClass}>
          <FaChartLine className="text-3xl mb-2" />
          <p className="text-center text-sm">Requirements Analysis</p>
        </div>

        <div className={skillClass}>
          <MdOutlineDeveloperMode className="text-3xl mb-2" />
          <p className="text-center text-sm">Business Analysis</p>
        </div>

        <div className={skillClass}>
          <GiProcessor className="text-3xl mb-2" />
          <p className="text-center text-sm">Process Improvement</p>
        </div>

        <div className={skillClass}>
          <FaUsers className="text-3xl mb-2" />
          <p className="text-center text-sm">Stakeholder Management</p>
        </div>
      </div>

      <h3
        className="mt-10 text-2xl font-semibold"
        style={{ fontFamily: "Playfair Display" }}
      >
        Systems & Data
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-6 ">
        <div className={skillClass}>
          <FaDatabase className="text-3xl mb-2" />
          <p className="text-center text-sm">SQL</p>
        </div>

        <div className={skillClass}>
          <MdSystemSecurityUpdateGood className="text-3xl mb-2" />
          <p className="text-center text-sm">System Analysis</p>
        </div>

        <div className={skillClass}>
          <GiProcessor className="text-3xl mb-2" />
          <p className="text-center text-sm">Data Management</p>
        </div>

        <div className={skillClass}>
          <FaFileAlt className="text-3xl mb-2" />
          <p className="text-center text-sm">Documentation</p>
        </div>
      </div>

      <h3
        className="mt-10 text-2xl font-semibold"
        style={{ fontFamily: "Playfair Display" }}
      >
        Professional
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-6 ">
        <div className={skillClass}>
          <FaComments className="text-3xl mb-2" />
          <p className="text-center text-sm">Communication</p>
        </div>

        <div className={skillClass}>
          <FaHandshake className="text-3xl mb-2" />
          <p className="text-center text-sm">Collaboration</p>
        </div>

        <div className={skillClass}>
          <FaLightbulb className="text-3xl mb-2" />
          <p className="text-center text-sm">Problem Solving</p>
        </div>

        <div className={skillClass}>
          <FaUsers className="text-3xl mb-2" />
          <p className="text-center text-sm">Adaptability</p>
        </div>

        <div className={skillClass}>
          <FaReact className="text-3xl mb-2" />
          <p className="text-center text-sm">Continuous Learning</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;

import { SiTypescript, SiJavascript, SiMysql } from "react-icons/si";

import {
  FaBug,
  FaChartLine,
  FaHandshake,
  FaFileAlt,
  FaComments,
  FaReact,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { VscCommentUnresolved } from "react-icons/vsc";
import { GiProcessor } from "react-icons/gi";
function Skills() {
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
        className="mt-6 text-2xl font-semibold"
        style={{ fontFamily: "Playfair Display" }}
      >
        Engineering
      </h3>
      <div className="grid grid-cols-5 gap-8 mt-4 max-w-4xl">
        <div
          className="flex flex-col items-center
          transition-all duration-300
          hover:-translate-y-1
          hover:text-[#8B6B3D]
          cursor-default"
        >
          <FaHtml5 className="text-3xl mb-2 " /> <p>HTML</p>
        </div>
        <div
          className="flex flex-col items-center
          transition-all duration-300
          hover:-translate-y-1
          hover:text-[#8B6B3D]
          cursor-default"
        >
          <FaCss3Alt className="text-3xl mb-2" /> <p>CSS</p>
        </div>
        <div
          className="flex flex-col items-center
          transition-all duration-300
          hover:-translate-y-1
          hover:text-[#8B6B3D]
          cursor-default"
        >
          <SiJavascript className="text-3xl mb-2" /> <p>JavaScript</p>
        </div>
        <div
          className="flex flex-col items-center
          transition-all duration-300
          hover:-translate-y-1
          hover:text-[#8B6B3D]
          cursor-default"
        >
          <SiTypescript className="text-3xl mb-2" /> <p>TypeScript</p>
        </div>
        <div
          className="flex flex-col items-center
          transition-all duration-300
          hover:-translate-y-1
          hover:text-[#8B6B3D]
          cursor-default"
        >
          <FaReact className="text-3xl mb-2" /> <p>React</p>
        </div>
      </div>

      <h3
        className="mt-6 text-2xl font-semibold"
        style={{ fontFamily: "Playfair Display" }}
      >
        Analysis
      </h3>
      <div className="grid grid-cols-4 gap-8 mt-4 max-w-4xl">
        <div
          className="flex flex-col items-center
          transition-all duration-300
          hover:-translate-y-1
          hover:text-[#8B6B3D]
          cursor-default"
        >
          <FaBug className="text-3xl mb-2" /> <p>Application Testing</p>
        </div>
        <div
          className="flex flex-col items-center
          transition-all duration-300
          hover:-translate-y-1
          hover:text-[#8B6B3D]
          cursor-default"
        >
          <FaChartLine className="text-3xl mb-2" /> <p>Requirements Analysis</p>
        </div>
        <div
          className="flex flex-col items-center
          transition-all duration-300
          hover:-translate-y-1
          hover:text-[#8B6B3D]
          cursor-default"
        >
          <MdOutlineDeveloperMode className="text-3xl mb-2" />{" "}
          <p>Business Development</p>
        </div>
        <div
          className="flex flex-col items-center
          transition-all duration-300
          hover:-translate-y-1
          hover:text-[#8B6B3D]
          cursor-default"
        >
          <VscCommentUnresolved className="text-3xl mb-2" />{" "}
          <p>Problem Solving</p>
        </div>
      </div>

      <h3
        className="mt-6 text-2xl font-semibold"
        style={{ fontFamily: "Playfair Display" }}
      >
        Systems and Data
      </h3>
      <div className="grid grid-cols-3 gap-12 mt-4 max-w-3xl">
        <div
          className="flex flex-col items-center
          transition-all duration-300
          hover:-translate-y-1
          hover:text-[#8B6B3D]
          cursor-default"
        >
          <SiMysql className="text-3xl mb-2" />
          <p>SQL</p>
        </div>
        <div
          className="flex flex-col items-center
          transition-all duration-300
          hover:-translate-y-1
          hover:text-[#8B6B3D]
          cursor-default"
        >
          <GiProcessor className="text-3xl mb-2" /> <p>Process Improvement</p>
        </div>
        <div
          className="flex flex-col items-center
          transition-all duration-300
          hover:-translate-y-1
          hover:text-[#8B6B3D]
          cursor-default"
        >
          <FaChartLine className="text-3xl mb-2" /> <p>System Analysis</p>
        </div>
      </div>

      <h3
        className="mt-6 text-2xl font-semibold"
        style={{ fontFamily: "Playfair Display" }}
      >
        Professional Skills
      </h3>
      <div className="grid grid-cols-3 gap-12 mt-4 max-w-3xl">
        <div
          className="flex flex-col items-center
          transition-all duration-300
          hover:-translate-y-1
          hover:text-[#8B6B3D]
          cursor-default"
        >
          <FaFileAlt className="text-3xl mb-2" /> <p>Documentation</p>
        </div>
        <div
          className="flex flex-col items-center
          transition-all duration-300
          hover:-translate-y-1
          hover:text-[#8B6B3D]
          cursor-default"
        >
          <FaComments className="text-3xl mb-2" /> <p>Communication</p>
        </div>
        <div
          className="flex flex-col items-center
          transition-all duration-300
          hover:-translate-y-1
          hover:text-[#8B6B3D]
          cursor-default"
        >
          <FaHandshake className="text-3xl mb-2" />{" "}
          <p>Stakeholder Collaboration</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;

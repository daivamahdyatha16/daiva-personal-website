import { useState, useEffect } from "react";
import { FaBars, FaChevronLeft } from "react-icons/fa";

function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navClass = (section: string) =>
    `
    block
    w-full
    px-4
    py-3
    rounded-md
    cursor-pointer
    transition-all
    duration-300
    hover:bg-[#e8dbc0]
    hover:text-[#8B6B3D]
    hover:border-l-2
    hover:border-[#8B6B3D]
    hover:pl-5

    ${
      activeSection === section
        ? "bg-[#e8dbc0] text-[#8B6B3D] border-l-2 border-[#8B6B3D] pl-5"
        : ""
    }
  `;

  return (
    <aside
      className={`
        hidden md:flex
        h-screen
        sticky top-0
        border-r border-[#8B6B3D]
        bg-[#f8e6cb]
        flex-col
        transition-all duration-300

        ${isCollapsed ? "w-20 p-4" : "w-64 p-6"}
      `}
    >
      <div className="flex items-center justify-between">
        {!isCollapsed && (
          <h2 className="text-3xl font-bold">
            DM
          </h2>
        )}

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label="Toggle Sidebar"
          className="
            p-2
            rounded-md
            hover:bg-[#e8dbc0]
            transition-colors
          "
        >
          {isCollapsed ? <FaBars /> : <FaChevronLeft />}
        </button>
      </div>

      <nav className="mt-10 flex-1">
        <ul className="space-y-4">
          <li>
            <a href="#hero" className={navClass("hero")}>
              {isCollapsed ? "I" : "I. Home"}
            </a>
          </li>

          <li>
            <a href="#about" className={navClass("about")}>
              {isCollapsed ? "II" : "II. About"}
            </a>
          </li>

          <li>
            <a href="#skills" className={navClass("skills")}>
              {isCollapsed ? "III" : "III. Skills"}
            </a>
          </li>

          <li>
            <a href="#portfolio" className={navClass("portfolio")}>
              {isCollapsed ? "IV" : "IV. Projects"}
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className={navClass("experience")}
            >
              {isCollapsed ? "V" : "V. Experience"}
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={navClass("contact")}
            >
              {isCollapsed ? "VI" : "VI. Contact"}
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
import { useState, useEffect } from "react";

function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");
  console.log(activeSection);
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
      { threshold: 0.5 },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
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
    <aside className="w-64 h-screen border-r border-[#8B6B3D] p-6 sticky top-0 flex flex-col hidden md:block">
      <h2 className="text-3xl font-bold">DM</h2>

      <nav className="mt-10">
        <ul className="space-y-4">
          <li>
            <a href="#hero" className={navClass("hero")}>
              I. Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={navClass("about")}
            >
              II. About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={navClass("skills")}
            >
              III. Skills
            </a>
          </li>

          <li>
            <a
              href="#portfolio"
              className={navClass("portfolio")}
            >
              IV. Projects
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className={navClass("experience")}>
              
            
              V. Experience
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={navClass("contact")}>  
            
              VI. Contact
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

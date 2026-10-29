import { useState, useEffect } from "react";
import { FaBars, FaChevronLeft, FaTimes } from "react-icons/fa";

const navItems = [
  { id: "hero", numeral: "I", label: "Home" },
  { id: "about", numeral: "II", label: "About" },
  { id: "skills", numeral: "III", label: "Skills" },
  { id: "portfolio", numeral: "IV", label: "Projects" },
  { id: "experience", numeral: "V", label: "Experience" },
  { id: "testimonials", numeral: "VI", label: "Testimonials" },
  { id: "contact", numeral: "VII", label: "Contact" },
];

function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
    <>
      <header
        className="
          md:hidden
          fixed top-0 inset-x-0
          z-40
          bg-[#f8e6cb]/90 backdrop-blur-sm
          border-b border-[#8B6B3D]/30
        "
      >
        <div className="flex items-center justify-between h-14 px-4">
          <p className="text-2xl font-bold">DM</p>

          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            className="
              p-2
              rounded-md
              hover:bg-[#e8dbc0]
              transition-colors
            "
          >
            {isMobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isMobileOpen && (
          <nav id="mobile-menu" className="px-4 pb-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsMobileOpen(false)}
                    className={navClass(item.id)}
                  >
                    {item.numeral}. {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <aside
        className={`
          hidden md:flex
          h-screen
          sticky top-0
          border-r border-[#8B6B3D]/30
          bg-[#f3dcb6]/40
          flex-col
          transition-all duration-300

          ${isCollapsed ? "w-20 p-4" : "w-64 p-6"}
        `}
      >
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <p className="text-3xl font-bold">
              DM
            </p>
          )}

          <button
            type="button"
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
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-label={isCollapsed ? item.label : undefined}
                  className={navClass(item.id)}
                >
                  {isCollapsed ? item.numeral : `${item.numeral}. ${item.label}`}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;

function Sidebar() {
  return (
    <aside className="w-64 h-screen border-r border-[#8B6B3D] p-6 sticky top-0 flex flex-col">
      <h2 className="text-3xl font-bold">DM</h2>

      <nav className="mt-10">
        <ul className="space-y-4">
          <li>
            <a
              href="#hero"
              className="
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
              "
            >
              I. Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="
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
              "
            >
              II. About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="
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
              "
            >
              III. Skills
            </a>
          </li>

          <li>
            <a
              href="#portfolio"
              className="
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
              "
            >
              IV. Projects
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className="
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
              "
            >
              V. Experience
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="
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
              "
            >
              VI. Contact
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
import SectionTitle from "./SectionTitle";
const experiences = [
  {
    start: "2026 -",
    end: "Present",
    title: "Immigration IT Team Lead",
    company: "Padang Immigration Office",
    focus: "IT Operations • Infrastructure • Team Leadership",
  },
  {
    start: "2021 -",
    end: "2026",
    title: "Immigration System Analyst",
    company: "Directorate General of Immigration",
    focus: "Application Testing • Business Development • Process Improvement",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="py-16"
    >
      <SectionTitle chapter="V" title="Experience" className="mb-12" />

      {experiences.map((item, index) => {
        const isLast = index === experiences.length - 1;

        return (
          <div
            key={item.title}
            className="grid grid-cols-[80px_30px_1fr] gap-x-6"
          >
            <div>
              <p className="font-semibold">{item.start}</p>
              <p>{item.end}</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-3 h-3 mt-1.5 rounded-full bg-[#8B6B3D]"></div>
              {!isLast && <div className="w-px flex-1 bg-[#8B6B3D]"></div>}
            </div>

            <div className={isLast ? "" : "pb-10"}>
              <h3
                className="text-2xl font-semibold"
                style={{ fontFamily: "Playfair Display" }}
              >
                {item.title}
              </h3>

              <p className="mb-2">
                {item.company}
              </p>

              <p className="text-sm">
                {item.focus}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Experience;

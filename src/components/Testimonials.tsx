import SectionTitle from "./SectionTitle";
function Testimonials() {
  const testimonials = [
    {
      name: "Project Stakeholder",
      role: "Visa Application Project",
      quote:
        "Daiva consistently delivers detailed analysis and thorough testing documentation.",
    },
    {
      name: "Team Member",
      role: "IT Division",
      quote:
        "Strong problem-solving skills and excellent communication throughout project execution.",
    },
    {
      name: "Product Owner",
      role: "Digital Services",
      quote:
        "Demonstrated excellent attention to detail when validating business requirements and workflows.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16"
    >
      <SectionTitle chapter="VI" title="Testimonials" className="mb-4" />

      <div className="overflow-hidden motion-reduce:overflow-x-auto">
  <div
    className="
      flex
      py-4
      gap-6
      animate-[scroll_20s_linear_infinite]
      hover:[animation-play-state:paused]
      motion-reduce:animate-none
      w-max
    "
  >
    {[...testimonials, ...testimonials].map((item, index) => (
      <div
        key={`${index}-${item.name}`}
        aria-hidden={index >= testimonials.length}
        className={`
          min-w-[320px]
          max-w-[320px]
          paper-card
          p-6
          hover:-translate-y-1
          transition-all
          duration-300
          ${index >= testimonials.length ? "motion-reduce:hidden" : ""}
        `}
      >
        <span
          aria-hidden="true"
          className="block text-6xl leading-none h-8 text-[#8B6B3D]/40"
          style={{ fontFamily: "Playfair Display" }}
        >
          &ldquo;
        </span>

        <p className="italic mb-4">
          {item.quote}
        </p>

        <h3 className="font-semibold">
          {item.name}
        </h3>

        <p className="text-sm opacity-70">
          {item.role}
        </p>
      </div>
    ))}
  </div>
</div>
    </section>
  );
}

export default Testimonials;
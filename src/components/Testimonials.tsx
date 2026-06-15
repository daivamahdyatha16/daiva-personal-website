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
      className="py-12 border-b border-[#8B6B3D]"
    >
      <p className="uppercase tracking-[0.3em] text-sm">
        Chapter VII
      </p>

      <h2
        className="text-4xl font-bold mb-8"
        style={{ fontFamily: "Playfair Display" }}
      >
        Testimonials
      </h2>

      <div className="overflow-hidden">
  <div
    className="
      flex
      gap-6
      animate-[scroll_20s_linear_infinite]
      w-max
    "
  >
    {[...testimonials, ...testimonials].map((item, index) => (
      <div
        key={index}
        className="
          min-w-[320px]
          max-w-[320px]
          border border-[#8B6B3D]
          rounded-xl
          p-6
          bg-[#f8e6cb]
          hover:-translate-y-1
          hover:shadow-lg
          transition-all
          duration-300
        "
      >
        <p className="italic mb-4">
          "{item.quote}"
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
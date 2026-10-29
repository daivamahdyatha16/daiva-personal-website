type SectionTitleProps = {
  chapter: string;
  title: string;
  className?: string;
};

function SectionTitle({ chapter, title, className = "" }: SectionTitleProps) {
  return (
    <div className={`relative ${className}`}>
      <span
        aria-hidden="true"
        className="
          absolute
          -top-10
          right-0
          text-[6rem]
          md:text-[7rem]
          leading-none
          font-bold
          text-[#8B6B3D]/10
          select-none
          pointer-events-none
        "
        style={{ fontFamily: "Playfair Display" }}
      >
        {chapter}
      </span>

      <p className="relative uppercase tracking-[0.3em] text-sm">
        Chapter {chapter}
      </p>

      <h2
        className="relative text-4xl font-bold"
        style={{ fontFamily: "Playfair Display" }}
      >
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;

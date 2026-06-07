function Experience() {
  return (
    <section
      id="experience"
      className="py-12 border-b border-[#8B6B3D]"
    >
      <p className="uppercase tracking-[0.3em] text-sm">
        Chapter V
      </p>

      <h2
        className="text-4xl font-bold mb-12"
        style={{ fontFamily: "Playfair Display" }}
      >
        Experience
      </h2>

      
      <div className="grid grid-cols-[80px_30px_1fr] gap-6 mb-10">
        
        <div>
          <p className="font-semibold">2026 - </p>
          <p>Present</p>
        </div>

        
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 rounded-full bg-[#8B6B3D]"></div>
          <div className="w-px h-16 bg-[#8B6B3D]"></div>
          <div className="w-3 h-3 rounded-full bg-[#8B6B3D]"></div>
        </div>

        
        <div>
          <h3
            className="text-2xl font-semibold"
            style={{ fontFamily: "Playfair Display" }}
          >
            Immigration IT Team Lead
          </h3>

          <p className="mb-2">
            Padang Immigration Office
          </p>

          <p className="text-sm">
            IT Operations • Infrastructure • Team Leadership
          </p>
        </div>
      </div>

      
      <div className="grid grid-cols-[80px_30px_1fr] gap-6">
        
        <div>
          <p className="font-semibold">2021 -</p>
          <p>2026</p>
        </div>

        
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 rounded-full bg-[#8B6B3D]"></div>
          <div className="w-px h-16 bg-[#8B6B3D]"></div>
          <div className="w-3 h-3 rounded-full bg-[#8B6B3D]"></div>
        </div>

        
        <div>
          <h3
            className="text-2xl font-semibold"
            style={{ fontFamily: "Playfair Display" }}
          >
            Immigration System Analyst
          </h3>

          <p className="mb-2">
            Directorate General of Immigration
          </p>

          <p className="text-sm">
            Application Testing • Business Development • Process Improvement
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
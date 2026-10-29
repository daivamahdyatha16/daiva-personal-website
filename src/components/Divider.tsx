function Divider() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center gap-4 text-[#8B6B3D]"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#8B6B3D]/50"></span>
      <span className="text-xl">❦</span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#8B6B3D]/50"></span>
    </div>
  );
}

export default Divider;

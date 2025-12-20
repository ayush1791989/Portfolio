export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <span className="font-serif text-2xl tracking-tighter italic"></span>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-500">
          <a href="#gallery" className="hover:text-black transition-colors">Portfolio</a>
          <a href="#about" className="hover:text-black transition-colors">Stats</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
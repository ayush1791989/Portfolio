const photos = [
  { id: 1, type: "Medium", url: "public/images/dsaybknnx5wtklikzjfy.webp", alt: "Full Length" },
  { id: 2, type: "Medium", url: "public/images/gz2penofcehfkoatgjh9.webp", alt: "Focus" },
  { id: 3, type: "Medium", url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800", alt: "Medium" },
  { id: 4, type: "Full Length", url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800", alt: "Full Length" },
  { id: 5, type: "Focus", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800", alt: "Focus" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="max-w-7xl mx-auto px-6 py-12">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {photos.map((photo) => (
          <div key={photo.id} className="group relative break-inside-avoid">
            <img 
              src={photo.url} 
              className="w-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out cursor-crosshair"
              alt={photo.alt}
            />
            <div className="mt-2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[9px] uppercase tracking-widest text-gray-400">{photo.type}</span>
              <span className="text-[9px] uppercase tracking-widest text-gray-400">00{photo.id}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
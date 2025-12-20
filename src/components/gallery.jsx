const photos = [
  { id: 1, type: "Medium", url: "/images/dsaybknnx5wtklikzjfy.webp", alt: "Full Length" },
  { id: 2, type: "Medium", url: "/images/gz2penofcehfkoatgjh9.webp", alt: "Focus" },
  { id: 3, type: "Full Length", url: "/images/hzxdirl234kyhaur1wcf.webp", alt: "Medium" },
  { id: 4, type: "Full Length", url: "/images/ijqdkfqtui3z1r5us2mb.webp", alt: "Full Length" },
  { id: 5, type: "Focus", url: "/images/klx7mp5ax6lgw7admceo.webp", alt: "Focus" },
  { id: 6, type: "Focus", url: "/images/srhdrfco6pwuqjeahxtb.webp", alt: "Focus" },
  { id: 7, type: "Full length", url: "/images/xj6srw1gub722k7zlkdn.webp", alt: "Focus" },
  { id: 8, type: "Full length", url: "/images/yuty7fwbyzyweyuubkfq.webp", alt: "Focus" },
  { id: 9, type: "Focus", url: "/images/zukia9ktt8gn3gptryad.webp", alt: "Focus" },
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
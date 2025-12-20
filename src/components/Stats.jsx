export default function Stats() {
  const measurements = [
    { label: "Height", value: "5'11\" / 180cm" },
    { label: "Bust", value: "32\" / 81cm" },
    { label: "Waist", value: "24\" / 61cm" },
    { label: "Hips", value: "34\" / 86cm" },
    { label: "Shoes", value: "9 US / 40 EU" },
    { label: "Eyes", value: "Hazel" },
    { label: "Hair", value: "Dark Brown" },
  ];

  return (
    <section id="about" className="py-24 bg-white px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl mb-12 text-center italic">Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 border-t border-b border-gray-100 py-12">
          {measurements.map((item, index) => (
            <div key={index} className="flex justify-between border-b border-gray-50 pb-2 md:border-none">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">{item.label}</span>
              <span className="text-sm font-medium tracking-wide">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
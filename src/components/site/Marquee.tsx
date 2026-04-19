const items = [
  "AI Discovery",
  "Consultancy & Advisory",
  "AI Solutions & Services",
  "Support & Training",
  "eCommerce Transformation",
  "Agentic AI",
  "DTC Strategy",
  "Digital Transformation",
];

export const Marquee = () => {
  const row = [...items, ...items];
  return (
    <div className="bg-gold py-3 overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-marquee">
        {row.map((t, i) => (
          <span
            key={i}
            className="font-display text-lg tracking-wider text-gold-foreground px-10"
          >
            {t}
            <span className="text-gold-foreground/40 ml-10">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const items = [
  "AI Discovery",
  "Consultancy & Advisory",
  "AI Solutions & Services",
  "Support & Training",
  "Retail",
  "eCommerce",
  "DTC Strategy",
  "Agentic AI",
];

export const Marquee = () => {
  const row = [...items, ...items];
  return (
    <div className="bg-gold py-4 overflow-hidden whitespace-nowrap border-y border-gold-foreground/10">
      <div className="inline-flex animate-marquee">
        {row.map((t, i) => (
          <span
            key={i}
            className="font-display italic text-xl text-gold-foreground px-10"
          >
            {t}
            <span className="text-gold-foreground/40 ml-10">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

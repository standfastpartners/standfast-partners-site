const cases = [
  {
    num: "01",
    tag: "Retail · AI Adoption",
    title: "AI-powered demand forecasting for a multi-channel retailer",
    desc: "Developed and deployed an agentic AI forecasting system that reduced overstock and improved availability across 4,000+ SKUs.",
    result: "34%",
    label: "Reduction in overstock costs",
  },
  {
    num: "02",
    tag: "eCommerce · DTC",
    title: "DTC transformation for a heritage consumer brand",
    desc: "Rebuilt the end-to-end digital commerce strategy — from platform selection to customer acquisition to post-purchase experience.",
    result: "2.8×",
    label: "Revenue growth in 18 months",
  },
  {
    num: "03",
    tag: "Digital Transformation",
    title: "Accelerating AI readiness for a 500-person business",
    desc: "Led an end-to-end AI discovery and implementation programme — from executive alignment to operational deployment across three business units.",
    result: "6 mo",
    label: "From discovery to live deployment",
  },
];

export const Work = () => {
  return (
    <section id="work" className="bg-secondary py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <span className="text-[10px] uppercase tracking-[0.22em] text-gold mb-4 block">
          Selected work
        </span>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-primary leading-[0.95]">
            Results, <br /> not reports.
          </h2>
          <p className="text-base leading-[1.8] text-muted-foreground max-w-md">
            Every engagement is measured by one thing: meaningful, lasting progress for the
            business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0.5">
          {cases.map((c) => (
            <article
              key={c.num}
              className="bg-primary p-8 md:p-10 relative overflow-hidden group cursor-pointer transition-transform hover:-translate-y-1"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--gold) / 0.12) 0%, transparent 60%)",
                }}
              />
              <span className="font-display text-7xl text-primary-foreground/10 absolute top-3 right-5 leading-none">
                {c.num}
              </span>
              <div className="relative">
                <span className="text-[10px] uppercase tracking-[0.18em] text-gold block mb-6">
                  {c.tag}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-primary-foreground leading-[1.05] mb-4">
                  {c.title}
                </h3>
                <p className="text-[13px] leading-[1.7] text-primary-foreground/60 mb-8">
                  {c.desc}
                </p>
                <div className="border-t border-white/10 pt-5 flex items-baseline gap-3">
                  <span className="font-display text-3xl text-gold">{c.result}</span>
                  <span className="text-xs text-primary-foreground/50 uppercase tracking-[0.1em]">
                    {c.label}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block text-xs uppercase tracking-[0.16em] text-primary border-b border-gold pb-1 hover:text-gold transition-colors"
          >
            Discuss your challenge →
          </a>
        </div>
      </div>
    </section>
  );
};

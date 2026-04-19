const services = [
  {
    num: "01",
    stage: "Where it starts",
    name: "AI Discovery",
    desc: "A sharp, honest picture of where AI can create real value in your specific business. Not a generic assessment — a commercial diagnosis built for action.",
    tags: ["Opportunity mapping", "AI readiness", "Prioritisation"],
  },
  {
    num: "02",
    stage: "Where clarity is built",
    name: "Strategy & Architecture",
    desc: "We shape the roadmap and make the hard calls — on AI strategy, digital transformation, eCommerce architecture, and DTC positioning. Thinking that drives decisions, not fills slide decks.",
    tags: ["AI strategy", "eCommerce", "DTC", "Architecture"],
  },
  {
    num: "03",
    stage: "Where it gets delivered",
    name: "AI Solutions & Services",
    desc: "We build and deploy. AI-powered solutions, specialist delivery teams, end-to-end programme ownership. We take accountability for outcomes, not just effort.",
    tags: ["Agentic AI", "Outsourced execution", "Programme delivery"],
  },
  {
    num: "04",
    stage: "What keeps it alive",
    name: "Support & Training",
    desc: "Transformation without capability transfer is dependency. We support your teams on an ongoing basis — building the knowledge, confidence, and internal skills to sustain and accelerate progress.",
    tags: ["Ongoing support", "Team training", "Capability building"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="bg-primary py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-14 md:mb-20">
          <div>
            <span className="text-[10px] uppercase tracking-[0.22em] text-gold mb-4 block">
              The proposition
            </span>
            <h2 className="font-display text-[2.25rem] sm:text-5xl md:text-6xl text-primary-foreground leading-[1.05]">
              Four stages. <span className="text-gold">One commitment.</span>
            </h2>
          </div>
          <p className="text-base leading-[1.8] text-primary-foreground/70 max-w-md">
            Standfast is a solutions company, not a menu of services. From the first honest
            conversation about AI to built, deployed, and embedded capability — clients enter
            where they need to. The commitment never changes: we deliver.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {services.map((s) => (
            <article
              key={s.num}
              className="bg-primary p-7 md:p-10 flex flex-col group hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-[10px] uppercase tracking-[0.22em] text-gold leading-tight max-w-[14ch]">
                  {s.stage}
                </span>
                <span className="font-display text-3xl md:text-4xl text-primary-foreground/15 group-hover:text-gold/40 transition-colors leading-none">
                  {s.num}
                </span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl text-primary-foreground leading-[1.1] mb-4">
                {s.name}
              </h3>

              <div className="w-10 h-0.5 bg-gold mb-5" />

              <p className="text-[14px] md:text-[15px] leading-[1.75] text-primary-foreground/70 mb-6">
                {s.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-[0.14em] text-gold/85 border border-gold/25 px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="font-accent text-[15px] text-primary-foreground/70 max-w-2xl mt-10">
          What every stage shares: senior people, genuine accountability, and a partner
          invested in the outcome — not the invoice.
        </p>
      </div>
    </section>
  );
};

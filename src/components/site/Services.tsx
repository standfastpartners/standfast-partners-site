import { useState } from "react";

const services = [
  {
    num: "01",
    name: "AI Discovery",
    lead: "Where it starts.",
    desc: "A sharp, honest picture of where AI can create real value in your specific business. Not a generic assessment — a commercial diagnosis built for action. We map the terrain: where you are, where the opportunity sits, what's realistic and what's noise.",
    tags: ["Opportunity mapping", "AI readiness", "Commercial diagnosis", "Prioritisation"],
  },
  {
    num: "02",
    name: "Strategy & Architecture",
    lead: "Where clarity is built.",
    desc: "We shape the roadmap and make the hard calls — on AI strategy, digital transformation, eCommerce architecture, and DTC positioning. Thinking that drives decisions, not fills slide decks. Senior practitioners in the room for the big calls — always external, always honest, always building toward delivery.",
    tags: ["AI strategy", "eCommerce", "DTC transformation", "Solution architecture"],
  },
  {
    num: "03",
    name: "AI Solutions & Services",
    lead: "Where it gets delivered.",
    desc: "We build and deploy. AI-powered solutions, specialist delivery teams, end-to-end programme ownership. We take accountability for outcomes, not just effort — stepping in to own and deliver the initiatives that matter most.",
    tags: ["Agentic AI", "Outsourced execution", "AI implementation", "Programme delivery"],
  },
  {
    num: "04",
    name: "Support & Training",
    lead: "What keeps it alive.",
    desc: "Transformation without capability transfer is dependency. We support your teams on an ongoing basis — building the knowledge, confidence, and internal skills to sustain and accelerate progress. The goal is always to make your business more capable, not more reliant on us.",
    tags: ["Ongoing support", "Team training", "AI literacy", "Capability building"],
  },
];

export const Services = () => {
  const [open, setOpen] = useState<string | null>("01");

  return (
    <section id="services" className="bg-primary py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.22em] text-gold mb-4 block">
              What we do
            </span>
            <h2 className="font-display text-[2.25rem] sm:text-[2.25rem] sm:text-5xl md:text-6xl text-primary-foreground leading-[1.05]">
              Four ways <em className="font-serif-italic text-gold">we deliver.</em>
            </h2>
          </div>
          <p className="text-base leading-[1.8] text-primary-foreground/70 max-w-md">
            Standfast is a solutions company, not a menu of services. From the first honest
            conversation about AI to built, deployed, and embedded capability. Clients enter
            where they need to. The commitment never changes: we deliver.
          </p>
        </div>

        <div className="border-t border-white/10">
          {services.map((s) => {
            const isOpen = open === s.num;
            return (
              <button
                key={s.num}
                onClick={() => setOpen(isOpen ? null : s.num)}
                className="w-full text-left border-b border-white/10 py-8 grid grid-cols-[60px_1fr_auto] md:grid-cols-[80px_1fr_auto] gap-6 items-start hover:bg-white/[0.02] transition-colors group"
              >
                <span
                  className={`font-display text-4xl md:text-5xl leading-none transition-colors ${
                    isOpen ? "text-gold/50" : "text-primary-foreground/15 group-hover:text-gold/30"
                  }`}
                >
                  {s.num}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <h3
                      className={`font-display text-2xl md:text-5xl leading-tight transition-colors break-words ${
                        isOpen ? "text-gold" : "text-primary-foreground group-hover:text-gold/80"
                      }`}
                    >
                      {s.name}
                    </h3>
                    <span className="font-accent text-primary-foreground/55 text-sm md:text-base">
                      {s.lead}
                    </span>
                  </div>
                  <div
                    className={`grid transition-all duration-500 ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[15px] leading-[1.8] text-primary-foreground/65 max-w-xl">
                        {s.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-5">
                        {s.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] uppercase tracking-[0.16em] text-gold/85 border border-gold/25 px-3 py-1.5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <span
                  className={`text-2xl text-gold/50 transition-transform mt-2 ${
                    isOpen ? "rotate-45 text-gold" : ""
                  }`}
                >
                  ↗
                </span>
              </button>
            );
          })}
        </div>

        <p className="font-accent text-[15px] text-primary-foreground/70 max-w-2xl mt-10">
          What every stage shares: senior people, genuine accountability, and a partner
          invested in the outcome — not the invoice.
        </p>
      </div>
    </section>
  );
};

const rows = [
  {
    head: "We deliver, not just advise",
    body: "We take ownership of outcomes, not just outputs. Whether shaping strategy or driving a programme, we stay accountable for what we promised.",
  },
  {
    head: "Deep domain, not generalist",
    body: "Our expertise sits at the intersection of AI, retail, eCommerce, and DTC transformation. We know the terrain — the decisions, the vendors, the failure modes, and the shortcuts that actually work.",
  },
  {
    head: "External, independent, focused",
    body: "We're not inside your organisation — no internal politics, no competing agendas, no distraction. Every engagement gets our full attention and honest counsel.",
  },
  {
    head: "AI-native, not AI-adjacent",
    body: "We don't layer AI onto what we do. It's fundamental to how we think, build, and help clients operate. We've already made the mistakes others haven't reached yet.",
  },
  {
    head: "Speed as a discipline",
    body: "We're structured to move at the pace transformation actually demands. Months become weeks. Decisions become actions.",
  },
  {
    head: "Senior, all the way through",
    body: "The people you meet are the people who do the work. No bait-and-switch with junior teams. The expertise you're buying is the expertise you get.",
  },
];

export const Differentiators = () => {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-14">
          <span className="text-[10px] uppercase tracking-[0.22em] text-gold mb-4 block">
            Why Standfast
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-primary leading-[1.05]">
            What sets us <em className="font-serif-italic text-gold">apart.</em>
          </h2>
        </div>

        <div className="border-t border-border">
          {rows.map((r) => (
            <div
              key={r.head}
              className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 py-7 border-b border-border group"
            >
              <h3 className="font-display text-2xl md:text-3xl text-primary leading-tight group-hover:text-gold transition-colors">
                {r.head}
              </h3>
              <p className="text-[15px] leading-[1.8] text-muted-foreground max-w-2xl">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

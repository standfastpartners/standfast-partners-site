const problems = [
  {
    n: "1",
    title: "The Execution Gap",
    text: "Strategy exists. Urgency is real. But the internal bandwidth to act on it doesn't. Transformation keeps getting pushed down the priority list — not because it doesn't matter, but because the business never stops demanding attention.",
  },
  {
    n: "2",
    title: "AI Paralysis",
    text: "The pace of AI change makes it genuinely difficult to know where to start, what to trust, and what creates real value versus noise. Most leaders need someone who has already navigated this — not someone figuring it out alongside them.",
  },
  {
    n: "3",
    title: "The Capability Deficit",
    text: "Serious transformation requires a rare combination of strategic, technical, and commercial expertise. Hiring it takes time no one has. We provide it as a partner, immediately and at the level the work demands.",
  },
  {
    n: "4",
    title: "Initiative Drift",
    text: "Without a dedicated external owner with genuine accountability, even the most important programmes lose momentum. Competing priorities turn ambition into frustration.",
  },
];

export const Problems = () => {
  return (
    <section className="bg-secondary py-24 md:py-32 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-start mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.22em] text-gold mb-4 block">
              What we solve
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-primary leading-[1.05]">
              The four reasons transformation <em className="font-serif-italic text-gold">stalls.</em>
            </h2>
          </div>
          <p className="text-base md:text-lg leading-[1.8] text-muted-foreground md:pt-6">
            Most leaders we speak to are smart, driven, and fully aware of what needs to
            happen. What they're short of isn't insight — it's the partner willing to stand
            beside them and deliver.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {problems.map((p) => (
            <article
              key={p.n}
              className="bg-secondary p-8 md:p-10 group hover:bg-background transition-colors"
            >
              <div className="flex items-baseline gap-5 mb-4">
                <span className="font-display text-4xl text-gold leading-none">0{p.n}</span>
                <h3 className="font-display text-2xl md:text-3xl text-primary">{p.title}</h3>
              </div>
              <p className="text-[15px] leading-[1.75] text-muted-foreground max-w-xl">
                {p.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

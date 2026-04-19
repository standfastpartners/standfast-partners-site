const values = [
  {
    title: "External & Independent",
    text: "No internal politics. No competing agendas. One focus: your outcome.",
  },
  {
    title: "Senior, all the way through",
    text: "The people you meet are the people who do the work.",
  },
  {
    title: "Speed as a discipline",
    text: "We're built to move at the pace transformation demands.",
  },
  {
    title: "Accountable for outcomes",
    text: "We stay until the work we promised is delivered.",
  },
];

export const About = () => {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Left */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.22em] text-gold mb-4 block">
            Who we are
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-primary leading-[0.95]">
            The partner <br /> that stays <br /> until it's done.
          </h2>
          <div className="w-12 h-0.5 bg-gold my-6" />
          <p className="text-base leading-[1.85] text-muted-foreground max-w-md mb-6">
            Standfast Partners is not a consultancy in the traditional sense. We don't arrive
            with a methodology, produce a document, and hand it over. We are an external
            partner — independent, senior, and deeply invested in the outcomes we take on.
          </p>
          <p className="text-base leading-[1.85] text-muted-foreground max-w-md">
            We come from the commercial world. We've held the accountability our clients now
            carry. We've made the same hard calls, built the expertise that only comes from
            having actual skin in the game.
          </p>

          <div className="grid sm:grid-cols-2 gap-px bg-border mt-12">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-background py-6 border-t-2 border-transparent hover:border-gold transition-colors"
              >
                <h3 className="text-sm font-medium text-primary mb-2">{v.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed pr-4">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="md:pt-20">
          <div className="relative aspect-[4/5] bg-primary overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-[6rem] md:text-[8rem] text-primary-foreground/10 text-center leading-[0.9]">
                STAND <br /> FAST
              </span>
            </div>
            <div className="absolute bottom-8 left-8 bg-gold px-5 py-2.5">
              <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-gold-foreground">
                Est. in purpose, not in years
              </span>
            </div>
          </div>
          <p className="font-serif-italic text-xl md:text-2xl text-primary leading-[1.6] mt-8 max-w-md">
            "We believe the businesses that shape the next era of commerce will not be the
            biggest, or the oldest, or the best-resourced. They will be the ones that moved
            with clarity and conviction when it was still hard to do."
          </p>
        </div>
      </div>
    </section>
  );
};

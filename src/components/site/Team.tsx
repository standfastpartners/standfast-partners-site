const team = [
  { name: "Eamonn", role: "Partner", initials: "EB" },
  { name: "Brian", role: "Partner", initials: "BR" },
  { name: "Noirin", role: "Partner", initials: "NO" },
  { name: "Vicky", role: "Partner", initials: "VI" },
];

export const Team = () => {
  return (
    <section id="team" className="bg-background py-24 md:py-32 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-end mb-14">
          <div>
            <span className="text-[10px] uppercase tracking-[0.22em] text-gold mb-4 block">
              The team
            </span>
            <h2 className="font-display text-[2.25rem] sm:text-5xl md:text-6xl text-primary leading-[1.05]">
              Senior, all the <span className="font-serif-italic text-gold">way through.</span>
            </h2>
          </div>
          <p className="font-accent text-base md:text-lg leading-[1.7] text-muted-foreground max-w-md">
            The people you meet are the people who do the work. No bait-and-switch. No
            junior teams. Just senior partners with skin in the game.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {team.map((m) => (
            <article
              key={m.name}
              className="bg-background p-6 md:p-8 group hover:bg-secondary transition-colors"
            >
              <div className="aspect-square bg-primary mb-5 flex items-center justify-center relative overflow-hidden">
                <span className="font-display text-4xl md:text-6xl text-primary-foreground/15 group-hover:text-gold/40 transition-colors">
                  {m.initials}
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl text-primary leading-tight">
                {m.name}
              </h3>
              <p className="text-[11px] uppercase tracking-[0.18em] text-gold mt-2">
                {m.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

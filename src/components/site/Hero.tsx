export const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-primary min-h-screen flex flex-col justify-end pb-24 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, hsl(var(--gold) / 0.10) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 10% 80%, hsl(var(--primary-foreground) / 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <p
          className="text-[10px] uppercase tracking-[0.24em] text-gold mb-8 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          AI &amp; Digital Transformation Partners
        </p>
        <h1
          className="font-display text-[clamp(3rem,8vw,7rem)] leading-[1.02] text-primary-foreground animate-fade-up max-w-[16ch]"
          style={{ animationDelay: "0.5s" }}
        >
          Strategy is nothing without someone{" "}
          <span className="text-gold italic font-serif-italic">to carry it.</span>
        </h1>
        <p
          className="font-serif-italic text-lg md:text-2xl leading-[1.55] text-primary-foreground/75 max-w-2xl mt-10 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          The external partner for leaders who are serious about AI and digital transformation
          — and need someone willing to take real ownership of the outcomes.
        </p>
        <div
          className="flex flex-wrap items-center gap-8 mt-12 animate-fade-up"
          style={{ animationDelay: "0.9s" }}
        >
          <a
            href="#contact"
            className="inline-block text-xs uppercase tracking-[0.18em] font-medium bg-gold text-gold-foreground px-10 py-4 hover:bg-gold/90 transition-colors"
          >
            Start the conversation
          </a>
          <a
            href="#services"
            className="text-xs uppercase tracking-[0.18em] text-primary-foreground/70 border-b border-gold/40 pb-1 hover:text-gold hover:border-gold transition-colors"
          >
            How we work
          </a>
        </div>

        <div
          className="hidden md:flex gap-14 mt-20 animate-fade-up"
          style={{ animationDelay: "1.1s" }}
        >
          {[
            { n: "24", l: "Months to act" },
            { n: "4", l: "Core practices" },
            { n: "1", l: "Agenda: yours" },
          ].map((s) => (
            <div key={s.l}>
              <span className="font-display text-5xl text-primary-foreground block leading-none">
                {s.n}
              </span>
              <span className="text-[11px] uppercase tracking-[0.16em] text-primary-foreground/45 mt-3 block">
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

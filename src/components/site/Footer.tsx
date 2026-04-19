export const Footer = () => {
  return (
    <footer className="bg-primary border-t border-white/10 py-10 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-6">
        <div className="font-display text-xl text-primary-foreground tracking-wider leading-none">
          Standfast<span className="text-gold">.</span><span className="text-primary-foreground/70 ml-1">Partners</span>
        </div>
        <div className="flex flex-wrap gap-6">
          {["About", "Services", "Work", "Insights", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[11px] uppercase tracking-[0.14em] text-primary-foreground/40 hover:text-gold transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <div className="text-[11px] uppercase tracking-[0.12em] text-primary-foreground/25">
          © {new Date().getFullYear()} Standfast Partners
        </div>
      </div>
    </footer>
  );
};

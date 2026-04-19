const articles = [
  {
    cat: "AI Strategy",
    date: "April 2025",
    title:
      "The gap between knowing and doing is where most AI programmes die — here's why",
    excerpt:
      "Most organisations understand the urgency of AI adoption. The bottleneck is never insight — it's the capacity, clarity, and capability to move. We look at the three patterns that separate businesses making real progress from those perpetually preparing to start.",
    featured: true,
  },
  {
    cat: "eCommerce",
    date: "March 2025",
    title:
      "The DTC brands that will win the next 24 months aren't the ones with the biggest budgets",
  },
  {
    cat: "Agentic AI",
    date: "February 2025",
    title:
      "Agentic AI is not the future of retail operations. It's already the present — for some.",
  },
];

export const Insights = () => {
  return (
    <section id="insights" className="bg-primary py-24 md:py-32 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.22em] text-gold mb-4 block">
              Thinking
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-primary-foreground leading-[1.05]">
              What we're <em className="font-serif-italic text-gold">watching.</em>
            </h2>
          </div>
          <a
            href="#"
            className="text-xs uppercase tracking-[0.18em] text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors self-start md:self-auto"
          >
            All articles →
          </a>
        </div>

        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-0.5">
          {articles.map((a, i) => (
            <article
              key={i}
              className={`p-8 md:p-10 border-b-2 border-transparent hover:border-gold transition-all hover:-translate-y-1 cursor-pointer ${
                a.featured ? "bg-primary" : "bg-primary/60"
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] uppercase tracking-[0.18em] text-gold">
                  {a.cat}
                </span>
                <span className="text-[10px] tracking-[0.1em] text-primary-foreground/35">
                  {a.date}
                </span>
              </div>
              <h3
                className={`font-display text-primary-foreground leading-[1.15] mb-4 ${
                  a.featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
                }`}
              >
                {a.title}
              </h3>
              {a.featured && (
                <p className="text-[14px] leading-[1.75] text-primary-foreground/60 mb-2">
                  {a.excerpt}
                </p>
              )}
              <span className="inline-block text-[11px] uppercase tracking-[0.16em] text-gold mt-6 border-b border-gold/30 pb-0.5">
                Read article
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

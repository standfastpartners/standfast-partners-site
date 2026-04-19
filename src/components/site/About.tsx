import { useState } from "react";
import { FiresideInvite } from "./FiresideInvite";

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
    text: "We're built to move at the pace transformation actually demands.",
  },
  {
    title: "Accountable for outcomes",
    text: "We stay until the work we promised is delivered.",
  },
];

export const About = () => {
  const [fireside, setFireside] = useState(false);
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24 items-start">
        <div>
          <span className="text-[10px] uppercase tracking-[0.22em] text-gold mb-4 block">
            Who we are
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-primary leading-[1.05]">
            A solutions partner that <em className="font-serif-italic text-gold">stays</em> until it's done.
          </h2>
          <div className="w-12 h-0.5 bg-gold my-6" />
          <p className="text-base leading-[1.85] text-muted-foreground max-w-md mb-6">
            Standfast Partners is a solutions company — not a consultancy. We don't arrive
            with a methodology, produce a document, and hand it over. We build, deploy, and
            own the outcome alongside you.
          </p>
          <p className="text-base leading-[1.85] text-muted-foreground max-w-md">
            We come from the commercial world. We've held the accountability our clients now
            carry. We've made the same hard calls and built the expertise that only comes from
            having actual skin in the game.
          </p>

          <div className="grid sm:grid-cols-2 gap-px bg-border mt-12">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-background py-6 pr-4 border-t-2 border-transparent hover:border-gold transition-colors"
              >
                <h3 className="text-sm font-medium text-primary mb-2">{v.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:pt-20">
          <div className="relative aspect-[4/5] bg-primary overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-[7rem] md:text-[10rem] text-primary-foreground/10 text-center leading-[0.85]">
                Stand<br />fast.
              </span>
            </div>
            <div className="absolute bottom-8 left-8 bg-gold px-5 py-2.5">
              <span className="text-[11px] uppercase tracking-[0.16em] font-medium text-gold-foreground">
                Est. in purpose, not in years
              </span>
            </div>
          </div>
          <p className="font-serif-italic text-xl md:text-2xl text-primary leading-[1.55] mt-8 max-w-md border-l-2 border-gold pl-6">
            "We believe the businesses that shape the next era of commerce will not be the
            biggest, or the oldest, or the best-resourced. They will be the ones that moved
            with clarity and conviction when it was still hard to do."
          </p>

          <div className="mt-10 max-w-md border-t border-border pt-8">
            <span className="text-[10px] uppercase tracking-[0.22em] text-gold mb-2 block">
              Fireside · Invite only
            </span>
            <p className="text-sm leading-[1.75] text-muted-foreground mb-4">
              Each year we host Fireside — an outdoor, off-record gathering for senior
              operators serious about AI and commerce. Strictly invitation only.
            </p>
            <button
              onClick={() => setFireside(true)}
              className="text-xs uppercase tracking-[0.18em] text-primary border-b border-gold pb-1 hover:text-gold transition-colors"
            >
              Request an invitation →
            </button>
          </div>
        </div>
      </div>

      <FiresideInvite open={fireside} onClose={() => setFireside(false)} />
    </section>
  );
};

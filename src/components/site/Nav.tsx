import { useEffect, useState } from "react";
import logo from "@/assets/standfast-icon.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#work", label: "Work" },
  { href: "#insights", label: "Insights" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-primary/95 backdrop-blur-md border-b border-white/10 px-6 md:px-12 py-4"
            : "px-6 md:px-12 py-6"
        }`}
      >
        <a href="#home" className="flex items-center gap-3 text-primary-foreground">
          <img src={logo} alt="Standfast Partners" className="h-8 w-8" />
          <span className="font-display text-xl tracking-wider leading-none">
            Standfast<span className="text-gold">.</span><span className="text-primary-foreground/70 ml-1">Partners</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.16em] text-primary-foreground/70 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-xs uppercase tracking-[0.16em] font-medium bg-gold text-gold-foreground px-6 py-3 hover:bg-gold/90 transition-colors"
          >
            Get in touch
          </a>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden flex flex-col gap-1.5 p-1"
        >
          <span className="w-6 h-px bg-primary-foreground" />
          <span className="w-6 h-px bg-primary-foreground" />
          <span className="w-6 h-px bg-primary-foreground" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-primary flex flex-col justify-center px-8 transition-transform duration-500 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-primary-foreground text-3xl"
        >
          ×
        </button>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-5xl text-primary-foreground py-3 border-b border-white/10 hover:text-gold transition-colors"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="font-display text-4xl text-gold py-3 mt-4"
        >
          Get in touch →
        </a>
      </div>
    </>
  );
};

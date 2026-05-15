"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "MISSION", href: "#mission" },
  { label: "EXPECT", href: "#expect" },
  { label: "COMMUNITY", href: "#community" },
  { label: "JOIN", href: "#meeting" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(var(--ink)/0.85)] backdrop-blur-md border-b border-[hsl(var(--border))]"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-3xl md:text-4xl text-primary">
            RWC
          </span>
          <span className="font-mono text-[10px] md:text-xs tracking-widest text-foreground/70 hidden sm:block">
            SACRAMENTO
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs tracking-widest text-foreground/80 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://www.instagram.com/runwchristsac/"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[10px] md:text-xs tracking-widest border border-foreground/30 px-3 md:px-4 py-2 hover:bg-primary hover:border-primary transition-colors"
        >
          @runwchristsac
        </a>
      </div>
    </nav>
  );
};

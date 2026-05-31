"use client";

import { useEffect, useState } from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa6";

const links = [
  { label: "HOME", href: "#top" },
  { label: "MISSION", href: "#mission" },
  { label: "EXPECT", href: "#expect" },
  { label: "COMMUNITY", href: "#community" },
  { label: "JOIN", href: "#meeting" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 right-0 left-0 z-50 hidden transition-all duration-300 md:block ${
          scrolled
            ? "border-foreground/10 border-b bg-[hsl(var(--ink)/0.85)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-12 py-4">
          <BrandLogo />

          <ul className="flex items-center gap-8">
            {links.slice(1).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-mono text-xs tracking-widest transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://www.instagram.com/runwchristsac/"
            target="_blank"
            rel="noreferrer"
            className="border-foreground/30 hover:border-primary hover:bg-primary inline-flex border px-4 py-2 font-mono text-xs tracking-widest transition-colors"
          >
            @runwchristsac
          </a>
        </div>
      </nav>

      {/* Mobile Navbar + Menu: same animated container */}
      <nav
        className="fixed top-0 right-0 left-0 z-50 transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden"
        style={{ padding: mobileOpen ? "1rem" : "0" }}
      >
        <div
          className={`relative overflow-hidden transition-[border-radius,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileOpen
              ? "rounded-[2rem] shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
              : "rounded-none shadow-none"
          }`}
        >
          {/* Frosted glass layer*/}
          <div
            className={`absolute inset-0 bg-[hsl(var(--secondary)/0.85)] backdrop-blur-xl transition-opacity duration-500 ${
              mobileOpen || scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="relative flex items-center justify-between px-5 py-4">
            <BrandLogo onClick={() => setMobileOpen(false)} />

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="border-foreground/15 bg-paper/10 relative flex h-10 w-10 items-center justify-center rounded-lg border backdrop-blur-md"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={`bg-foreground absolute h-0.5 w-5 rounded-full transition-transform duration-300 ease-in-out ${
                  mobileOpen ? "rotate-45" : "-translate-y-1"
                }`}
              />
              <span
                className={`bg-foreground absolute h-0.5 w-5 rounded-full transition-transform duration-300 ease-in-out ${
                  mobileOpen ? "-rotate-45" : "translate-y-1"
                }`}
              />
            </button>
          </div>

          <div
            className={`bg-foreground/10 relative z-10 mx-7 h-px transition-opacity duration-300 ${
              mobileOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-7 py-7">
                <ul className="flex flex-col gap-1">
                  {links.map((link, index) => (
                    <li
                      key={link.href}
                      className={`transition-all duration-500 ease-out ${
                        mobileOpen
                          ? "translate-y-0 opacity-100"
                          : "translate-y-3 opacity-0"
                      }`}
                      style={{
                        transitionDelay: mobileOpen ? `${index * 50}ms` : "0ms",
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="font-nav text-foreground flex items-center justify-between px-1 py-3.5 text-[2rem] uppercase"
                      >
                        {link.label}
                        <span className="text-primary font-mono text-sm">
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://venmo.com/u/runwithchristsac"
                  onClick={() => setMobileOpen(false)}
                  className={`bg-primary font-heading text-primary-foreground hover:bg-primary-deep mt-6 flex w-full items-center justify-center rounded-xl px-6 py-4 text-xl transition-all duration-500 ${
                    mobileOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  }`}
                  style={{ transitionDelay: mobileOpen ? "250ms" : "0ms" }}
                >
                  DONATE
                </a>

                <div
                  className={`mt-8 flex items-center justify-between transition-all duration-500 ${
                    mobileOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  }`}
                  style={{ transitionDelay: mobileOpen ? "320ms" : "0ms" }}
                >
                  <p className="text-foreground/50 font-mono text-[10px] tracking-widest">
                    FOLLOW THE MOVEMENT
                  </p>

                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.instagram.com/runwchristsac/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="border-foreground/15 text-foreground hover:border-primary hover:text-primary flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
                    >
                      <FaInstagram className="h-4 w-4" />
                    </a>

                    <a
                      href="https://www.tiktok.com/@runwchristsac"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="TikTok"
                      className="border-foreground/15 text-foreground hover:border-primary hover:text-primary flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
                    >
                      <FaTiktok className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const BrandLogo = ({ onClick }: { onClick?: () => void }) => (
  <a
    href="#top"
    onClick={onClick}
    className="flex items-baseline gap-2"
    aria-label="Run With Christ Sacramento Home"
  >
    <span className="font-display text-primary text-3xl md:text-4xl">RWC</span>
    <span className="text-foreground/70 hidden font-mono text-[10px] tracking-widest sm:block md:text-xs">
      SACRAMENTO
    </span>
  </a>
);

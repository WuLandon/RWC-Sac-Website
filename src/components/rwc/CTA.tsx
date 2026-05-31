import Image from "next/image";

export const CTA = () => {
  return (
    <section id="cta" className="relative min-h-[90svh] overflow-hidden">
      <Image
        src="/images/webp-format/capitol-tent-group.webp"
        alt="RWC tent at the capitol building"
        aria-hidden="true"
        fill
        sizes="100vw"
        className="absolute inset-0 object-cover"
      />
      <div className="from-ink/60 via-ink/70 to-ink absolute inset-0 bg-gradient-to-b" />

      <div className="relative flex min-h-[90svh] flex-col justify-end px-6 pt-32 pb-16 md:px-12 md:pt-40 md:pb-24">
        <div className="mb-12 md:mb-20">
          <span className="text-primary font-mono text-xs tracking-widest">
            / 05 — YOUR MOVE
          </span>
        </div>

        <h2 className="font-display text-[18vw] md:text-[14vw]">
          SHOW UP <br />
          START <span className="text-primary">HERE.</span>
        </h2>

        <div className="mt-10 flex max-w-5xl flex-col gap-6 md:mt-14 md:flex-row md:items-center md:gap-10">
          <p className="text-foreground/80 max-w-md font-mono text-sm md:text-base">
            Be part of the movement. Run with us. Pray with us. Belong here.
          </p>
          <div className="flex flex-col gap-4 lg:flex-row">
            <a
              href="#meeting"
              className="group bg-primary text-primary-foreground font-heading hover:bg-primary-deep inline-flex items-center gap-3 rounded-sm px-8 py-5 text-base whitespace-nowrap transition-colors md:text-lg"
            >
              JOIN THE MOVEMENT
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="https://www.instagram.com/runwchristsac/"
              target="_blank"
              rel="noreferrer"
              className="group border-foreground text-foreground font-heading hover:bg-foreground hover:text-ink inline-flex items-center gap-3 rounded-sm border-2 px-8 py-5 text-base whitespace-nowrap transition-colors md:text-lg"
            >
              FOLLOW @runwchristsac
              <span className="transition-transform group-hover:translate-x-1"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

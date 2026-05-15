import Image from "next/image";

export const CTA = () => {
  return (
    <section className="relative min-h-[90svh] overflow-hidden">
      <Image
        src="/images/capitol-tent-group.jpg"
        alt="RWC tent at the capitol building"
        aria-hidden="true"
        fill
        sizes="100vw"
        className="absolute inset-0 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/70 to-ink" />

      <div className="relative min-h-[90svh] px-6 md:px-12 pt-32 md:pt-40 pb-16 md:pb-24 flex flex-col justify-end">
        <div className="mb-12 md:mb-20">
          <span className="font-mono text-xs tracking-widest text-primary">
            / 05 — YOUR MOVE
          </span>
        </div>

        <h2 className="font-display text-[18vw] md:text-[14vw]">
          SHOW UP <br />
          START <span className="text-primary">HERE.</span>
        </h2>

        <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 max-w-5xl">
          <p className="font-mono text-sm md:text-base text-foreground/80 max-w-md">
            Be part of the movement. Run with us. Pray with us. Belong here.
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <a
              href="#meeting"
              className="group inline-flex items-center gap-3 whitespace-nowrap bg-primary text-primary-foreground font-heading text-base md:text-lg px-8 py-5 hover:bg-primary-deep transition-colors"
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
              className="group inline-flex items-center gap-3 whitespace-nowrap border-2 border-foreground text-foreground font-heading text-base md:text-lg px-8 py-5 hover:bg-foreground hover:text-ink transition-colors"
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

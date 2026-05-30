const heroImg = "/images/webp-format/flag-waving-group.webp";
const heroVideo = "/videos/rwc-video.webm";

export const Hero = () => {
  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden"
    >
      {/* BG */}
      <div className="absolute inset-0">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={heroImg}
            aria-hidden="true"
          >
            <source src={heroVideo} type="video/webm" />
          </video>
        </div>

        {/* Overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[hsl(var(--ink)/0.7)] via-[hsl(var(--ink)/0.4)] to-[hsl(var(--ink)/1)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[hsl(var(--ink)/0.8)] via-transparent to-transparent" />
      </div>

      {/* Top label */}
      <div className="text-foreground/70 fade-up absolute top-24 right-6 left-6 z-20 flex items-center justify-between font-mono text-[10px] tracking-widest md:top-28 md:right-12 md:left-12 md:text-xs">
        <span>LOC. SACRAMENTO / CA</span>
        <span className="hidden md:block">FAITH × FITNESS × COMMUNITY</span>
        <span>NO. 916</span>
      </div>

      {/* Main poster headline */}
      <div className="relative z-20 px-6 pb-12 md:px-12 md:pb-20">
        <h1
          className="font-display text-foreground fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="block text-[18vw] md:text-[14vw] lg:text-[13vw]">
            MAKE
          </span>
          <span className="block text-[18vw] md:text-[14vw] lg:text-[13vw]">
            HEAVEN <span className="text-primary">FULL</span>
          </span>
        </h1>

        <div className="mt-8 flex flex-col gap-8 md:mt-12 md:flex-row md:items-end md:justify-between">
          <p
            className="text-foreground/80 fade-up max-w-md font-mono text-sm leading-relaxed md:text-base"
            style={{ animationDelay: "0.3s" }}
          >
            Not just a run club —
            <br />
            <span className="text-foreground">
              a movement to make heaven full.
            </span>
          </p>

          <div className="fade-up" style={{ animationDelay: "0.45s" }}>
            <a
              href="#meeting"
              className="group bg-primary text-primary-foreground font-heading hover:bg-primary-deep inline-flex items-center gap-3 px-8 py-5 text-base transition-colors md:text-lg"
            >
              JOIN THE MOVEMENT
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator — desktop only, centered bottom */}
      <a
        href="#mission"
        aria-label="Scroll to next section"
        className="text-foreground/70 hover:text-primary animate-bounce-down absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 items-center justify-center transition-colors md:flex"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
};

import Image from "next/image";

const heroImg = "/images/webp-format/flag-waving-group.webp";
const heroVideo = "/videos/rwc-video.webm";
const heroVideoFallback = "/videos/rwc-video.mp4";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] md:min-h-screen w-full overflow-hidden flex flex-col justify-end grain"
    >
      {/* BG */}
      <div className="absolute inset-0">
        {/* Desktop Video */}
        <div className="hidden md:block absolute inset-0">
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
            <source src={heroVideoFallback} type="video/mp4" />
          </video>
        </div>

        {/* Mobile Image */}
        <div className="md:hidden absolute inset-0">
          <Image
            src={heroImg}
            alt="JESUS IS KING flag waving"
            aria-hidden="true"
            fill
            sizes="(max-width: 768px) 100vw"
            priority
            className="object-cover"
          />
        </div>

        {/* Overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[hsl(var(--ink)/0.7)] via-[hsl(var(--ink)/0.4)] to-[hsl(var(--ink)/1)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[hsl(var(--ink)/0.8)] via-transparent to-transparent" />
      </div>

      {/* Top label */}
      <div className="absolute top-24 md:top-28 left-6 md:left-12 right-6 md:right-12 z-20 flex items-center justify-between font-mono text-[10px] md:text-xs tracking-widest text-foreground/70 fade-up">
        <span>LOC. SACRAMENTO / CA</span>
        <span className="hidden md:block">FAITH × FITNESS × COMMUNITY</span>
        <span>NO. 916</span>
      </div>

      {/* Main poster headline */}
      <div className="relative z-20 px-6 md:px-12 pb-12 md:pb-20">
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

        <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p
            className="font-mono text-sm md:text-base text-foreground/80 max-w-md leading-relaxed fade-up"
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
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground font-heading text-base md:text-lg px-8 py-5 hover:bg-primary-deep transition-colors"
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
        className="hidden md:flex absolute bottom-6 left-1/2 z-20 -translate-x-1/2 items-center justify-center text-foreground/70 hover:text-primary transition-colors animate-bounce-down"
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

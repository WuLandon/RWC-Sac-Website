import Image from "next/image";

const culture = [
  "MAKE HEAVEN FULL",
  "ISOLATED TO INTEGRATED",
  "KNOWN, SEEN, LOVED",
  "CONFESSION & VULNERABILITY",
  "UNITE FOR CHRIST",
  "DIVINE IS IN THE DETAILS",
];

const missionFeatureImage = "/images/tent-talk.jpg";

export const Mission = () => {
  return (
    <section
      id="mission"
      className="relative px-6 md:px-12 py-24 md:py-40 bg-ink"
    >
      <div className="mb-12 md:mb-20">
        <span className="font-mono text-xs tracking-widest text-primary">
          / 01 — MISSION
        </span>
      </div>
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 md:items-stretch">
        <div className="md:col-span-7">
          <h2 className="font-display text-foreground text-[14vw] md:text-[8vw]">
            FROM <span className="text-stroke-red">ISOLATED</span>
            <br />
            TO <span className="text-primary">INTEGRATED.</span>
          </h2>
          <p className="font-heading mt-8 text-primary text-xl md:text-2xl tracking-wide">
            Inspiring through faith and fitness.
          </p>
          <p className="font-mono mt-4 max-w-xl text-foreground/70 leading-relaxed">
            We see a world that moves together — body, mind, and Spirit. Built
            through running, worship, and prayer. We are not just a run club,
            but a movement to make heaven full.
          </p>
        </div>

        <div className="relative aspect-[4/3] md:col-span-5 md:h-full md:aspect-auto">
          <Image
            src={missionFeatureImage}
            alt="Mission section visual"
            fill
            sizes="(max-width: 767px) 100vw, 42vw"
            className="object-cover saturate-[0.2] contrast-110 brightness-[0.82] rounded-sm border border-border/60"
          />
        </div>
      </div>

      {/* Culture statements */}
      <div className="mt-20 md:mt-32 border-t border-border pt-12">
        <div className="flex items-baseline justify-between mb-8">
          <span className="font-mono text-xs tracking-widest text-foreground/50">
            CULTURE
          </span>
          <span className="font-mono text-xs tracking-widest text-foreground/50">
            06 PILLARS
          </span>
        </div>
        <ul className="divide-y divide-border">
          {culture.map((c, i) => (
            <li
              key={c}
              className="group flex items-baseline justify-between py-6 md:py-8 hover:pl-4 transition-all cursor-default"
            >
              <div className="flex items-baseline gap-4 md:gap-8">
                <span className="font-mono text-xs text-primary w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-3xl md:text-6xl lg:text-7xl group-hover:text-primary transition-colors">
                  {c}
                </span>
              </div>
              <span className="hidden md:block font-mono text-xs text-foreground/30 group-hover:text-primary transition-colors">
                ✝
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

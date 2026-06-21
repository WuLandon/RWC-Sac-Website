import Image from "next/image";

const culture = [
  "MAKE HEAVEN FULL",
  "ISOLATED TO INTEGRATED",
  "KNOWN, SEEN, LOVED",
  "CONFESSION",
  "VULNERABILITY",
  "UNITE FOR CHRIST",
  "DIVINE IS IN THE DETAILS",
];

const missionFeatureImage = "/images/webp-format/tent-talk.webp";

export const Mission = () => {
  return (
    <section
      id="mission"
      className="bg-ink relative px-6 pt-24 pb-8 md:px-12 md:pt-40 md:pb-24"
    >
      <div className="mb-12 md:mb-20">
        <span className="text-primary font-mono text-xs tracking-widest">
          / 01 — MISSION
        </span>
      </div>
      <div className="grid gap-8 md:grid-cols-12 md:items-stretch md:gap-12">
        <div className="md:col-span-7">
          <h2 className="font-display text-foreground text-[14vw] md:text-[8vw]">
            FROM <span className="text-stroke-red">ISOLATED</span>
            <br />
            TO <span className="text-primary">INTEGRATED.</span>
          </h2>
          <p className="font-heading text-primary mt-8 text-xl tracking-wide md:text-2xl">
            Inspiring through faith and fitness.
          </p>
          <p className="text-foreground/70 mt-4 max-w-xl font-mono leading-relaxed">
            We see a world that moves together — body, mind, and Spirit. Built
            through running, worship, and prayer. We are not just a run club,
            but a movement to make heaven full.
          </p>
        </div>

        <div className="group relative aspect-[4/3] overflow-hidden rounded-md md:col-span-5 md:aspect-auto md:h-full">
          <Image
            src={missionFeatureImage}
            alt="ISOLATED TO INTEGRATED RWC tent"
            fill
            sizes="(max-width: 767px) calc(100vw - 48px), 42vw"
            className="object-cover brightness-[0.82] contrast-100 saturate-[0.2] transition-all duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </div>

      {/* Culture statements */}
      <div className="mt-20 pt-12 md:mt-32">
        <div className="mb-8 flex items-baseline justify-between">
          <span className="text-foreground/50 font-mono text-xs tracking-widest">
            CULTURE
          </span>
          <span className="text-foreground/50 font-mono text-xs tracking-widest">
            07 PILLARS
          </span>
        </div>
        <ul className="divide-border divide-y">
          {culture.map((c, i) => (
            <li
              key={c}
              className="group flex cursor-default items-baseline justify-between py-6 transition-all hover:pl-4 md:py-8"
            >
              <div className="flex items-baseline gap-4 md:gap-8">
                <span className="text-primary w-8 font-mono text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display group-hover:text-primary text-3xl transition-colors md:text-6xl lg:text-7xl">
                  {c}
                </span>
              </div>
              <span className="text-foreground/30 group-hover:text-primary hidden font-mono text-xs transition-colors md:block">
                ✝
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

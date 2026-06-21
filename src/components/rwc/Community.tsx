import Image from "next/image";

const communityImages = {
  groupHuddle: "/images/webp-format/group-huddle.webp",
  flagWaving: "/images/webp-format/flag-waving-group.webp",
  groupHands: "/images/webp-format/group-huddle-hands.webp",
  posterTrio: "/images/webp-format/poster-3-ppl.webp",
  groupRun: "/images/webp-format/group-run.webp",
  tentGroupPose: "/images/webp-format/tent-group-pose.webp",
  rwcTent: "/images/webp-format/tent-3-ppl.webp",
} as const;

type CollageItem = {
  src: string;
  alt: string;
  spanClass: string;
  sizes: string;
};

const collageItems: CollageItem[] = [
  {
    src: communityImages.flagWaving,
    alt: "JESUS IS KING flag waving",
    spanClass: "col-span-7 row-span-1",
    sizes: "(max-width: 767px) min(82vw, 420px), 59vw",
  },
  {
    src: communityImages.groupHuddle,
    alt: "Group huddle before the run",
    spanClass: "col-span-5 row-span-1",
    sizes: "(max-width: 767px) min(82vw, 420px), 42vw",
  },
  {
    src: communityImages.posterTrio,
    alt: "Three people with posters",
    spanClass: "col-span-4 row-span-1",
    sizes: "(max-width: 767px) min(82vw, 420px), 34vw",
  },
  {
    src: communityImages.groupRun,
    alt: "Runners moving together as a group",
    spanClass: "col-span-8 row-span-1",
    sizes: "(max-width: 767px) min(82vw, 420px), 67vw",
  },
  {
    src: communityImages.tentGroupPose,
    alt: "Group pose at RWC tent",
    spanClass: "col-span-4 row-span-1",
    sizes: "(max-width: 767px) min(82vw, 420px), 34vw",
  },
  {
    src: communityImages.groupHands,
    alt: "Group huddle hands in",
    spanClass: "col-span-6 row-span-1",
    sizes: "(max-width: 767px) min(82vw, 420px), 50vw",
  },
  {
    src: communityImages.rwcTent,
    alt: "RWC tent group candid photo",
    spanClass: "col-span-2 row-span-1",
    sizes: "(max-width: 767px) min(82vw, 420px), 17vw",
  },
];

const photoClass =
  "object-cover saturate-[0.2] contrast-100 brightness-[0.82] transition-all duration-700 ease-out group-hover:scale-105";

const figureClass = "relative overflow-hidden group rounded-sm";

export const Community = () => {
  return (
    <section
      id="community"
      className="bg-ink relative overflow-hidden px-6 py-24 md:px-12 md:py-40"
    >
      <div className="mb-12 flex items-baseline justify-between md:mb-20">
        <span className="text-primary font-mono text-xs tracking-widest">
          / 03 — COMMUNITY
        </span>

        <a
          href="https://www.instagram.com/runwchristsac/"
          target="_blank"
          rel="noreferrer"
          className="text-foreground/60 hover:text-primary font-mono text-xs tracking-widest transition-colors"
        >
          MORE ON INSTAGRAM →
        </a>
      </div>

      <h2 className="font-display mb-6 text-[14vw] md:mb-20 md:text-[10vw]">
        REAL PEOPLE. <br />
        <span className="text-primary">REAL MOMENTS.</span>
      </h2>

      {/* Edge fade gradients */}
      <div className="from-ink pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r to-transparent md:hidden" />
      <div className="from-ink pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l to-transparent md:hidden" />

      {/* Gallery */}
      <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:snap-none md:auto-rows-[280px] md:grid-cols-12 md:gap-4 md:overflow-visible md:px-0 md:pb-0">
        {collageItems.map((item, index) => (
          <figure
            key={`${item.src}-${index}`}
            className={` ${figureClass} h-[320px] w-[min(82vw,420px)] shrink-0 snap-center overflow-hidden md:h-auto md:w-auto ${item.spanClass}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={item.sizes}
              className={photoClass}
            />
          </figure>
        ))}
      </div>
    </section>
  );
};

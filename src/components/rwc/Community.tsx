import Image from "next/image";

const communityImages = {
  groupHuddle: "/images/group-huddle.jpg",
  flagWaving: "/images/flag-waving-group.jpg",
  groupHands: "/images/group-huddle-hands.jpg",
  posterTrio: "/images/poster-3-ppl.jpg",
  groupRun: "/images/group-run.jpg",
  tentGroupPose: "/images/tent-group-pose.jpg",
  rwcTent: "/images/tent-3-ppl.jpg",
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
    sizes: "(max-width: 767px) min(82vw, 420px), 67vw",
  },
  {
    src: communityImages.groupRun,
    alt: "Runners moving together as a group",
    spanClass: "col-span-8 row-span-1",
    sizes: "(max-width: 767px) min(82vw, 420px), 34vw",
  },
  {
    src: communityImages.tentGroupPose,
    alt: "Group pose at RWC tent",
    spanClass: "col-span-4 row-span-1",
    sizes: "(max-width: 767px) min(82vw, 420px), 33vw",
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
      className="relative overflow-hidden px-6 md:px-12 py-24 md:py-40 bg-ink"
    >
      <div className="flex items-baseline justify-between mb-12 md:mb-20">
        <span className="font-mono text-xs tracking-widest text-primary">
          / 03 — COMMUNITY
        </span>

        <a
          href="https://www.instagram.com/runwchristsac/"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs tracking-widest text-foreground/60 transition-colors hover:text-primary"
        >
          MORE ON INSTAGRAM →
        </a>
      </div>

      <h2 className="font-display text-[14vw] md:text-[10vw] mb-6 md:mb-20">
        REAL PEOPLE. <br />
        <span className="text-primary">REAL MOMENTS.</span>
      </h2>

      {/* Edge fade gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-ink to-transparent md:hidden" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-ink to-transparent md:hidden" />

      {/* Gallery */}
      <div className="-mx-6 no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:snap-none md:grid-cols-12 md:gap-4 md:overflow-visible md:px-0 md:pb-0 md:auto-rows-[280px]">
        {collageItems.map((item, index) => (
          <figure
            key={`${item.src}-${index}`}
            className={`
              ${figureClass} 
              h-[320px] 
              w-[min(82vw,420px)]
              shrink-0 
              snap-center 
              overflow-hidden 
              md:h-auto 
              md:w-auto 
              ${item.spanClass}`}
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

const phases = [
  {
    tag: "01",
    title: "PRE-RUN",
    items: [
      "Start at the RWC tent",
      "Meet the community",
      "Warm up together",
      "Begin with prayer + devotional",
    ],
    note: "We start with the Word.",
  },
  {
    tag: "02",
    title: "DURING RUN",
    items: [
      "5K run / walk / jog",
      "Run your pace",
      "Keep each other going",
      "Build strength in community",
    ],
    note: "Nobody runs alone.",
  },
  {
    tag: "03",
    title: "POST-RUN",
    items: [
      "Cool down together",
      "Stay and connect",
      "Build lasting friendships",
      "Keep coming back",
    ],
    note: "Where strangers become family.",
  },
];

export const Expect = () => {
  return (
    <section
      id="expect"
      className="bg-paper text-ink relative px-6 py-24 md:px-12 md:py-40"
    >
      <div className="mb-12 flex items-baseline justify-between md:mb-20">
        <span className="text-primary font-mono text-xs tracking-widest">
          / 02 — WHAT TO EXPECT
        </span>
        <span className="text-ink/50 hidden font-mono text-xs tracking-widest md:block">
          A REAL RUN
        </span>
      </div>

      <h2 className="font-display mb-12 text-[13vw] md:mb-24 md:text-[10vw]">
        SHOW UP. <br />
        <span className="text-primary">RUN. PRAY. BELONG.</span>
      </h2>

      <div className="bg-ink/10 grid gap-px md:grid-cols-3">
        {phases.map((p) => (
          <article key={p.tag} className="bg-paper flex flex-col p-8 md:p-10">
            <div className="mb-8 flex items-baseline justify-between">
              <span className="text-primary font-mono text-xs tracking-widest">
                PHASE {p.tag}
              </span>
              <span className="text-ink/40 font-mono text-xs">✝</span>
            </div>
            <h3 className="font-display mb-8 text-5xl md:text-6xl">
              {p.title}
            </h3>
            <ul className="mb-8 flex-1 space-y-3">
              {p.items.map((i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-3 font-mono text-sm"
                >
                  <span className="text-primary">→</span>
                  {i}
                </li>
              ))}
            </ul>
            <p className="font-heading border-ink/20 border-t pt-6 text-lg">
              {p.note}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

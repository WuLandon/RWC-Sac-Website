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
      className="relative px-6 md:px-12 py-24 md:py-40 bg-paper text-ink"
    >
      <div className="flex items-baseline justify-between mb-12 md:mb-20">
        <span className="font-mono text-xs tracking-widest text-primary">
          / 02 — WHAT TO EXPECT
        </span>
        <span className="font-mono text-xs tracking-widest text-ink/50 hidden md:block">
          A REAL RUN
        </span>
      </div>

      <h2 className="font-display text-[13vw] md:text-[10vw] mb-12 md:mb-24">
        SHOW UP. <br />
        <span className="text-primary">RUN. PRAY. BELONG.</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-px bg-ink/10">
        {phases.map((p) => (
          <article key={p.tag} className="bg-paper p-8 md:p-10 flex flex-col">
            <div className="flex items-baseline justify-between mb-8">
              <span className="font-mono text-xs text-primary tracking-widest">
                PHASE {p.tag}
              </span>
              <span className="font-mono text-xs text-ink/40">✝</span>
            </div>
            <h3 className="font-display text-5xl md:text-6xl mb-8">
              {p.title}
            </h3>
            <ul className="space-y-3 mb-8 flex-1">
              {p.items.map((i) => (
                <li
                  key={i}
                  className="font-mono text-sm flex gap-3 items-baseline"
                >
                  <span className="text-primary">→</span>
                  {i}
                </li>
              ))}
            </ul>
            <p className="font-heading text-lg border-t border-ink/20 pt-6">
              {p.note}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

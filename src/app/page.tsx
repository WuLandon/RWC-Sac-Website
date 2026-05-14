export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.2),transparent_35%),radial-gradient(circle_at_80%_15%,hsl(var(--foreground)/0.08),transparent_30%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--ink)))]" />
      <div className="relative grain mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 sm:px-10 lg:px-14">
        <header className="space-y-5">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Style System Check
          </p>
          <h1 className="font-display text-[3rem] sm:text-[4.5rem]">
            Rhythm Without Compromise
          </h1>
          <h2 className="font-heading text-3xl text-primary sm:text-5xl">
            Font, Foreground, Background Validation
          </h2>
          <p className="max-w-3xl font-mono text-sm leading-7 text-muted-foreground sm:text-base">
            This page is a visual fixture to confirm your loaded Google fonts,
            color tokens, utility classes, and contrast behavior.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-sm border bg-card p-4 text-card-foreground">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Background
            </p>
            <p className="mt-2 font-heading text-xl">bg-background</p>
          </div>
          <div className="rounded-sm border bg-foreground p-4 text-background">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-70">
              Foreground
            </p>
            <p className="mt-2 font-heading text-xl">text-foreground</p>
          </div>
          <div className="rounded-sm border border-primary bg-primary p-4 text-primary-foreground">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-80">
              Primary
            </p>
            <p className="mt-2 font-heading text-xl">bg-primary</p>
          </div>
          <div className="rounded-sm border bg-muted p-4 text-muted-foreground">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em]">
              Muted
            </p>
            <p className="mt-2 font-heading text-xl text-foreground">bg-muted</p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-sm border bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Font Samples
            </p>
            <div className="mt-4 space-y-4">
              <p className="font-display text-5xl leading-none">DISPLAY</p>
              <p className="font-heading text-4xl">HEADING</p>
              <p className="font-mono text-base">
                MONO / BODY: The quick brown fox jumps over the lazy dog. 0123456789
              </p>
            </div>
          </article>

          <article className="rounded-sm border bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Utility Samples
            </p>
            <div className="mt-4 space-y-3">
              <p className="font-display text-5xl text-stroke">STROKE WHITE</p>
              <p className="font-display text-5xl text-stroke-red">STROKE RED</p>
              <div className="rounded-sm border border-primary-deep bg-secondary p-3 font-mono text-sm">
                border-primary-deep + bg-secondary
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

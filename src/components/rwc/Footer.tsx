export const Footer = () => {
  return (
    <footer className="bg-ink border-border border-t px-6 py-12 md:px-12">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <div className="font-display text-primary text-6xl leading-none md:text-8xl">
            RWC
          </div>
          <div className="text-foreground/60 mt-2 font-mono text-xs tracking-widest">
            RUN WITH CHRIST · SACRAMENTO
          </div>
        </div>
        <div className="text-foreground/50 space-y-2 font-mono text-xs tracking-widest md:text-right">
          <p>NOT JUST A RUN CLUB.</p>
          <p>A MOVEMENT TO MAKE HEAVEN FULL. ✝</p>
          <p className="pt-4">© {new Date().getFullYear()} RWC SAC</p>
        </div>
      </div>
    </footer>
  );
};

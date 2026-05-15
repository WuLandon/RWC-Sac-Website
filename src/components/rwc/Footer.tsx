export const Footer = () => {
  return (
    <footer className="bg-ink border-t border-border px-6 md:px-12 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="font-display text-6xl md:text-8xl text-primary leading-none">RWC</div>
          <div className="font-mono text-xs tracking-widest text-foreground/60 mt-2">
            RUN WITH CHRIST · SACRAMENTO
          </div>
        </div>
        <div className="font-mono text-xs tracking-widest text-foreground/50 space-y-2 md:text-right">
          <p>NOT JUST A RUN CLUB.</p>
          <p>A MOVEMENT TO MAKE HEAVEN FULL. ✝</p>
          <p className="pt-4">© {new Date().getFullYear()} RWC SAC</p>
        </div>
      </div>
    </footer>
  );
};

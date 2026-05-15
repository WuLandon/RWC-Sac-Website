interface MarqueeProps {
  items: string[];
  variant?: "red" | "white";
}

export const Marquee = ({ items, variant = "red" }: MarqueeProps) => {
  return (
    <div
      className={`relative overflow-hidden border-y border-border py-4 md:py-6 ${
        variant === "red"
          ? "bg-primary text-primary-foreground"
          : "bg-paper text-ink"
      }`}
    >
      <div className="flex w-max marquee">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex whitespace-nowrap"
            aria-hidden={group === 1}
          >
            {items.map((t, i) => (
              <span
                key={`${group}-${i}`}
                className="font-display text-3xl md:text-5xl mx-8 md:mx-12 inline-flex items-center gap-8 md:gap-12"
              >
                {t}

                {/* Cross */}
                <span className="relative inline-block w-[8px] md:w-[10px] h-[16px] md:h-[20px] shrink-0 -skew-x-12">
                  {/* vertical */}
                  <span
                    className={`absolute left-1/2 top-0 -translate-x-1/2 w-[2.5px] h-full ${
                      variant === "red" ? "bg-primary-foreground" : "bg-ink"
                    }`}
                  />

                  {/* horizontal */}
                  <span
                    className={`absolute left-1/2 top-[24%] -translate-x-1/2 w-full h-[2.5px] ${
                      variant === "red" ? "bg-primary-foreground" : "bg-ink"
                    }`}
                  />
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

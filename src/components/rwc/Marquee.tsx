interface MarqueeProps {
  items: string[];
  variant?: "red" | "white";
}

export const Marquee = ({ items, variant = "red" }: MarqueeProps) => {
  return (
    <div
      className={`border-border relative overflow-hidden border-y py-4 md:py-6 ${
        variant === "red"
          ? "bg-primary text-primary-foreground"
          : "bg-paper text-ink"
      }`}
    >
      <div className="marquee flex w-max">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex whitespace-nowrap"
            aria-hidden={group === 1}
          >
            {items.map((t, i) => (
              <span
                key={`${group}-${i}`}
                className="font-display mx-8 inline-flex items-center gap-8 text-3xl md:mx-12 md:gap-12 md:text-5xl"
              >
                {t}

                {/* Cross */}
                <span className="relative inline-block h-[16px] w-[8px] shrink-0 -skew-x-12 md:h-[20px] md:w-[10px]">
                  {/* vertical */}
                  <span
                    className={`absolute top-0 left-1/2 h-full w-[2.5px] -translate-x-1/2 ${
                      variant === "red" ? "bg-primary-foreground" : "bg-ink"
                    }`}
                  />

                  {/* horizontal */}
                  <span
                    className={`absolute top-[24%] left-1/2 h-[2.5px] w-full -translate-x-1/2 ${
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

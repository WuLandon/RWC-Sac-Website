import { FaQuoteLeft } from "react-icons/fa6";
const DONATE_URL = "https://venmo.com/u/runwithchristsac";

export const Donate = () => {
  return (
    <section id="donate" className="bg-ink text-foreground relative">
      <div className="px-6 pt-8 pb-10 md:px-12 md:pt-10 md:pb-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          {/* Main Content */}
          <div className="md:col-span-12">
            <div className="mx-auto max-w-6xl">
              <div className="text-primary mb-6">
                <FaQuoteLeft className="h-10 w-10 md:h-12 md:w-12" />
              </div>

              <blockquote className="font-oswald text-foreground text-left text-[11vw] leading-[1.05] tracking-[-0.02em] italic sm:text-[8vw] md:text-[4.5vw] lg:text-[4vw]">
                Every gift helps create more opportunities for people to
                encounter Christ, be transformed by His truth, and advance His
                kingdom.
              </blockquote>

              <div className="mt-10">
                <a
                  href={DONATE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group border-primary/80 bg-primary relative inline-flex w-full items-center justify-center rounded-[18px] border px-7 py-5 transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_0_30px_hsl(var(--primary)_/_0.22)] sm:w-auto"
                >
                  {/* Black offset layer */}
                  <span className="bg-ink border-primary absolute inset-0 -translate-x-[6px] -translate-y-[6px] rounded-[18px] border transition-transform duration-300 group-hover:-translate-x-[4px] group-hover:-translate-y-[4px]" />

                  {/* Main button face */}
                  <span className="relative z-10 flex -translate-x-[3px] -translate-y-[3px] items-center justify-center">
                    <span className="font-heading text-xl tracking-wide text-white md:text-2xl">
                      DONATE
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

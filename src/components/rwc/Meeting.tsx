import { sanityFetch } from "@/sanity/lib/live";
import { upcomingEventQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

type MeetingData = {
  eventType?: string;
  date?: string;
  time?: string;
  location?: string;
  address?: string;
  notes: string[];
};

export const Meeting = async () => {
  const { data } = await sanityFetch({
    query: upcomingEventQuery,
  });

  const meeting = data as MeetingData;

  // const eventType = meeting.eventType || "Something Exciting";
  const time = meeting.time || "TBD";
  const location = meeting.location || "TBD";
  const address = meeting.address || "TBD";

  const formattedDate = meeting.date
    ? new Date(meeting.date)
        .toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })
        .toUpperCase()
    : "TBD";

  return (
    <section
      id="meeting"
      className="bg-primary text-primary-foreground relative overflow-hidden px-6 py-24 md:px-12 md:py-40"
    >
      {/* Watermark */}
      <div className="font-display text-primary-deep/30 pointer-events-none absolute -top-10 -right-10 text-[40vw] leading-none select-none md:text-[20vw]">
        RWC
      </div>

      <div className="relative">
        <div className="mb-12 flex items-baseline justify-between md:mb-20">
          <span className="font-mono text-xs tracking-widest">
            / 04 — WHEN & WHERE
          </span>
          <span className="hidden font-mono text-xs tracking-widest md:block">
            SEE YOU THERE
          </span>
        </div>

        <h2 className="font-display mb-16 text-[17vw] md:text-[12vw]">
          UP NEXT
          <br />
          DON&apos;T MISS.
        </h2>

        {/* Optional event type */}
        {/* {eventType && (
          <p className="mt-10 font-heading text-2xl md:text-3xl">
            {eventType}
          </p>
        )} */}

        <div className="border-primary-foreground grid gap-8 border-t-2 pt-12 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-3">
            <span className="mb-2 block font-mono text-[10px] tracking-widest opacity-70">
              / DAY
            </span>
            <p className="font-heading text-3xl md:text-4xl">{formattedDate}</p>
          </div>

          <div className="md:col-span-3">
            <span className="mb-2 block font-mono text-[10px] tracking-widest opacity-70">
              / TIME
            </span>
            <p className="font-heading text-3xl md:text-4xl">{time}</p>
          </div>

          <div className="md:col-span-6">
            <span className="mb-2 block font-mono text-[10px] tracking-widest opacity-70">
              / LOCATION
            </span>

            <p className="font-heading text-3xl md:text-4xl">{location}</p>

            <p className="mt-2 font-mono text-sm opacity-90">{address}</p>
          </div>
        </div>

        <div className="border-primary-foreground mt-12 grid gap-12 border-t-2 pt-12 md:grid-cols-2">
          <div>
            <span className="mb-4 block font-mono text-[10px] tracking-widest opacity-70">
              / KNOW BEFORE YOU GO
            </span>

            <ul className="space-y-3">
              {meeting.notes.map((n: string) => (
                <li
                  key={n}
                  className="flex items-baseline gap-3 font-mono text-sm md:text-base"
                >
                  <span>✝</span>
                  {n}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-end md:justify-end">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noreferrer"
              className="group bg-ink text-foreground font-heading hover:bg-paper hover:text-ink inline-flex items-center gap-3 rounded-sm px-8 py-5 text-lg transition-colors md:text-xl"
            >
              GET DIRECTIONS
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

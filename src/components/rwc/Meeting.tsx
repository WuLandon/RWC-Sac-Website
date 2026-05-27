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
      className="relative px-6 md:px-12 py-24 md:py-40 bg-primary text-primary-foreground overflow-hidden"
    >
      {/* Watermark */}
      <div className="absolute -top-10 -right-10 font-display text-[40vw] md:text-[20vw] text-primary-deep/30 select-none pointer-events-none leading-none">
        RWC
      </div>

      <div className="relative">
        <div className="flex items-baseline justify-between mb-12 md:mb-20">
          <span className="font-mono text-xs tracking-widest">
            / 04 — WHEN & WHERE
          </span>
          <span className="font-mono text-xs tracking-widest hidden md:block">
            SEE YOU THERE
          </span>
        </div>

        <h2 className="font-display text-[17vw] md:text-[12vw] mb-16">
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

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 border-t-2 border-primary-foreground pt-12">
          <div className="md:col-span-3">
            <span className="font-mono text-[10px] tracking-widest opacity-70 block mb-2">
              / DAY
            </span>
            <p className="font-heading text-3xl md:text-4xl">{formattedDate}</p>
          </div>

          <div className="md:col-span-3">
            <span className="font-mono text-[10px] tracking-widest opacity-70 block mb-2">
              / TIME
            </span>
            <p className="font-heading text-3xl md:text-4xl">{time}</p>
          </div>

          <div className="md:col-span-6">
            <span className="font-mono text-[10px] tracking-widest opacity-70 block mb-2">
              / LOCATION
            </span>

            <p className="font-heading text-3xl md:text-4xl">{location}</p>

            <p className="font-mono text-sm mt-2 opacity-90">{address}</p>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-12 border-t-2 border-primary-foreground pt-12">
          <div>
            <span className="font-mono text-[10px] tracking-widest opacity-70 block mb-4">
              / KNOW BEFORE YOU GO
            </span>

            <ul className="space-y-3">
              {meeting.notes.map((n: string) => (
                <li
                  key={n}
                  className="font-mono text-sm md:text-base flex gap-3 items-baseline"
                >
                  <span>✝</span>
                  {n}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex md:justify-end items-end">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-ink text-foreground font-heading text-lg md:text-xl px-8 py-5 hover:bg-paper hover:text-ink transition-colors"
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

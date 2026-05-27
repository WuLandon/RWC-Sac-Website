import { groq } from "next-sanity";

export const upcomingEventQuery = groq`
  *[_type == "upcomingEvent"][0]{
    eventType,
    date,
    time,
    location,
    address,
    notes
  }
`;

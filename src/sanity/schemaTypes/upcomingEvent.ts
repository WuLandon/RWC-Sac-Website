import { defineField, defineType } from "sanity";

export const upcomingEvent = defineType({
  name: "upcomingEvent",
  title: "Upcoming Event",
  type: "document",
  fields: [
    defineField({
      name: "eventType",
      title: "Event Type",
      type: "string",
      description: "Optional. Example: Run, Worship Night, Special Collab",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      description: "Leave blank if TBD",
    }),
    defineField({
      name: "time",
      title: "Time",
      type: "string",
      description: "Example: 10:00 AM. Leave blank if TBD",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "Example: California State Capitol. Leave blank if TBD",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
      description: "Example: 1315 10th St, Sacramento, CA 95814",
    }),
    defineField({
      name: "notes",
      title: "Know Before You Go",
      type: "array",
      of: [{ type: "string" }],
      initialValue: [
        "Meet us at the RWC tent",
        "Free drinks and snacks provided",
        "Don’t hesitate to show up solo",
        "5K run · walk · jog",
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});

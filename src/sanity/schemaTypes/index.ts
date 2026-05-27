import { type SchemaTypeDefinition } from "sanity";
import { upcomingEvent } from "./upcomingEvent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [upcomingEvent],
};

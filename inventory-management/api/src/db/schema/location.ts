import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import { timestamps } from "./timestamps";

export const locationTable = pgTable("location", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }),
  ...timestamps,
});

export const LocationSchema = createSelectSchema(locationTable);
export const LocationInsertSchema = createInsertSchema(locationTable);
export const LocationUpdateSchema = createUpdateSchema(locationTable);

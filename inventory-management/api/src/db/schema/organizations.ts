import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const organizationsTable = pgTable("organizations", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
});

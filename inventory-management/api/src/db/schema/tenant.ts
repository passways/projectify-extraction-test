import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "./timestamps";

export const tenantTable = pgTable("tenant", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }),
  ownerId: varchar({ length: 63 }).notNull(),
  ...timestamps,
});

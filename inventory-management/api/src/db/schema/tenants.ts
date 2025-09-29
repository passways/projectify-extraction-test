import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { usersTable } from "./users";

export const tenantTable = pgTable("tenant", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
  owner_id: uuid()
    .notNull()
    .references(() => usersTable.id),
});

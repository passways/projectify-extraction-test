import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "./timestamps";
import { userTable } from "./user";

export const tenantTable = pgTable("tenant", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }),
  ownerId: uuid()
    .notNull()
    .references(() => userTable.id),
  ...timestamps,
});

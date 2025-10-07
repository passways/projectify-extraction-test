import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { locationTable } from "./location";
import { timestamps } from "./timestamps";

export const inventoryTable = pgTable("inventory", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }),
  quantity: integer().notNull().default(0),
  ean: varchar({ length: 13 }).notNull().unique(),
  locationId: uuid()
    .notNull()
    .references(() => locationTable.id),
  ...timestamps,
});

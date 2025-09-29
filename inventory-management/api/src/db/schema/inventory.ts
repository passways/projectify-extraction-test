import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { tenantTable } from "./tenant";
import { timestamps } from "./timestamps";

export const inventoryTable = pgTable("inventory", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }),
  quantity: integer().notNull().default(0),
  tenant_id: uuid()
    .notNull()
    .references(() => tenantTable.id),
  ...timestamps,
});

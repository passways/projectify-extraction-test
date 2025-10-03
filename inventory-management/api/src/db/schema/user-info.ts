import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { tenantTable } from "./tenant";
import { timestamps } from "./timestamps";

export const userInfoTable = pgTable("user_info", {
  userId: varchar({ length: 63 }).primaryKey(),
  primaryTenantId: uuid()
    .notNull()
    .references(() => tenantTable.id),
  ...timestamps,
});

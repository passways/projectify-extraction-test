import { pgTable, uuid } from "drizzle-orm/pg-core";
import { tenantTable } from "./tenant";
import { timestamps } from "./timestamps";

export const userInfoTable = pgTable("user_info", {
  userId: uuid().primaryKey(),
  primaryTenantId: uuid()
    .notNull()
    .references(() => tenantTable.id),
  ...timestamps,
});

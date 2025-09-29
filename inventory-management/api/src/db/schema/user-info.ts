import { pgTable, uuid } from "drizzle-orm/pg-core";
import { tenantTable } from "./tenant";
import { timestamps } from "./timestamps";
import { userTable } from "./user";

export const userInfoTable = pgTable("user_info", {
  userId: uuid()
    .primaryKey()
    .references(() => userTable.id),
  primaryTenantId: uuid()
    .notNull()
    .references(() => tenantTable.id),
  ...timestamps,
});

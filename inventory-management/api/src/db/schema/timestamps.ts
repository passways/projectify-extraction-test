import { sql } from "drizzle-orm";
import { timestamp } from "drizzle-orm/pg-core";

export const timestamps = {
  createdAt: timestamp({ withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp({ withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => sql`CURRENT_TIMESTAMP`),
};

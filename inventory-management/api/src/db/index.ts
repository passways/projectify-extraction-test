import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "../env";
import { tenantsTable } from "./schema/tenants";
import { usersTable } from "./schema/users";

const client = postgres(env.DATABASE_URL);
export const db = drizzle({
  client,
  logger: true,
  casing: "snake_case",
  schema: {
    ...tenantsTable,
    ...usersTable,
  },
});

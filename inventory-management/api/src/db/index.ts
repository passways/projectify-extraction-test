import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "../env";
import { tenantTable } from "./schema/tenant";
import { userTable } from "./schema/user";

const client = postgres(env.DATABASE_URL);
export const db = drizzle({
  client,
  logger: true,
  casing: "snake_case",
  schema: {
    ...tenantTable,
    ...userTable,
  },
});

import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { organizationsTable } from "./schema/organizations";
import { usersTable } from "./schema/users";
import { env } from "../env";

const client = postgres(env.DATABASE_URL);
export const db = drizzle({
  client,
  logger: true,
  casing: "snake_case",
  schema: {
    ...organizationsTable,
    ...usersTable,
  },
});

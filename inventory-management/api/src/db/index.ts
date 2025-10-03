import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "../env";
import { inventoryTable } from "./schema/inventory";
import { locationTable } from "./schema/location";
import { tenantTable } from "./schema/tenant";
import { userInfoTable } from "./schema/user-info";

const client = postgres(env.DATABASE_URL);
export const db = drizzle({
  client,
  logger: true,
  casing: "snake_case",
  schema: {
    ...tenantTable,
    ...inventoryTable,
    ...locationTable,
    ...userInfoTable,
  },
});

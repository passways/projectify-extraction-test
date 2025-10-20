import { db } from "../../db";
import {
  LocationInsertSchema,
  LocationSchema,
  locationTable,
} from "../../db/schema/location";
import { requireAuth } from "../../middleware/require-auth";

export default requireAuth
  .input(LocationInsertSchema)
  .output(LocationSchema)
  .handler(async ({ input }) => {
    const location = await db.insert(locationTable).values(input).returning();
    return location[0];
  });

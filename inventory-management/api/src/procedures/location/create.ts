import { db } from "../../db";
import { locationTable } from "../../db/schema/location";
import { requireAuth } from "../../middleware/auth";

export const createLocationProcedure = requireAuth.location.create.handler(
  async ({ input: { name, description } }) => {
    const location = await db
      .insert(locationTable)
      .values({
        name,
        description,
      })
      .returning();

    return location[0];
  },
);

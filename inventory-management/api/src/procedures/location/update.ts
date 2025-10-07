import { eq } from "drizzle-orm";
import { db } from "../../db";
import { locationTable } from "../../db/schema/location";
import { requireAuth } from "../../middleware/auth";

export const updateLocationProcedure = requireAuth.location.update.handler(
  async ({ input: { id, name, description }, errors }) => {
    const location = await db
      .update(locationTable)
      .set({
        name,
        description,
      })
      .where(eq(locationTable.id, id))
      .returning();

    if (location.length === 0) {
      throw errors.NOT_FOUND();
    }

    return location[0];
  },
);

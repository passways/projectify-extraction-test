import { eq } from "drizzle-orm";
import { db } from "../../db";
import { locationTable } from "../../db/schema/location";
import { requireAuth } from "../../middleware/auth";

export const getLocationProcedure = requireAuth.location.get.handler(
  async ({ input, errors }) => {
    const location = await db
      .select()
      .from(locationTable)
      .where(eq(locationTable.id, input.id));

    if (location.length === 0) {
      throw errors.NOT_FOUND();
    }

    return location[0];
  },
);

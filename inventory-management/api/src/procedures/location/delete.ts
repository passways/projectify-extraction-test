import { eq } from "drizzle-orm";
import { db } from "../../db";
import { locationTable } from "../../db/schema/location";
import { requireAuth } from "../../middleware/auth";

export const deleteLocationProcedure = requireAuth.location.delete.handler(
  async ({ input: id, errors }) => {
    const result = await db
      .delete(locationTable)
      .where(eq(locationTable.id, id))
      .returning();

    if (result.length === 0) {
      throw errors.NOT_FOUND();
    }
  },
);

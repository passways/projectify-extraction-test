import { ORPCError } from "@orpc/server";
import { eq } from "drizzle-orm";
import { db } from "../../db";
import { LocationSchema, locationTable } from "../../db/schema/location";
import { requireAuth } from "../../middleware/require-auth";

export default requireAuth
  .input(LocationSchema)
  .output(LocationSchema)
  .handler(async ({ input }) => {
    const updatedLocation = await db
      .update(locationTable)
      .set(input)
      .where(eq(locationTable.id, input.id));

    if (updatedLocation.length === 0) {
      throw new ORPCError("NOT_FOUND");
    }

    return updatedLocation[0];
  });

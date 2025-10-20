import { ORPCError } from "@orpc/server";
import { eq } from "drizzle-orm";
import z from "zod";
import { db } from "../../db";
import { LocationSchema, locationTable } from "../../db/schema/location";
import { requireAuth } from "../../middleware/require-auth";

export default requireAuth
  .route({
    path: "/locations/:id",
    method: "GET",
    successStatus: 200,
  })
  .input(z.object({ id: z.uuid() }))
  .output(LocationSchema)
  .handler(async ({ input }) => {
    const location = await db
      .select()
      .from(locationTable)
      .where(eq(locationTable.id, input.id));

    if (location.length === 0) {
      throw new ORPCError("NOT_FOUND");
    }

    return location[0];
  });

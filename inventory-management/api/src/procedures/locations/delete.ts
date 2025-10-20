import { ORPCError } from "@orpc/server";
import { eq } from "drizzle-orm";
import z from "zod";
import { db } from "../../db";
import { locationTable } from "../../db/schema/location";
import { requireAuth } from "../../middleware/require-auth";

export default requireAuth
  .input(z.object({ id: z.uuid() }))
  .handler(async ({ input }) => {
    const result = await db
      .delete(locationTable)
      .where(eq(locationTable.id, input.id))
      .returning();

    if (result.length === 0) {
      throw new ORPCError("NOT_FOUND");
    }
  });

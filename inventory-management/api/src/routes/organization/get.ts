import { os } from "@orpc/server";
import z from "zod";
import { db } from "../../db";
import { organizationsTable } from "../../db/schema/organizations";
import { eq } from "drizzle-orm";

export const getOrganizations = os
  .input(
    z.object({
      organizationId: z.string().optional(),
    }),
  )
  .errors({
    NOT_FOUND: {
      message: "Organization not found",
    },
  })
  .handler(async ({ input, errors }) => {
    if (input.organizationId) {
      const organizations = await db
        .select()
        .from(organizationsTable)
        .where(eq(organizationsTable.id, input.organizationId));

      if (organizations.length === 0) {
        throw errors.NOT_FOUND();
      }

      return organizations[0];
    }

    return await db.select().from(organizationsTable);
  });

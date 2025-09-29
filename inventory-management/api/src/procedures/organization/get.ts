import { eq } from "drizzle-orm";
import z from "zod";
import { db } from "../../db";
import { organizationsTable } from "../../db/schema/organizations";
import { os } from "../../os";

export const getOrganizations = os.organizations.get.handler(
  async ({ input, errors }) => {
    const organizations = await db
      .select()
      .from(organizationsTable)
      .where(eq(organizationsTable.id, input.id));

    if (organizations.length === 0) {
      throw errors.NOT_FOUND();
    }

    return organizations[0];
  },
);

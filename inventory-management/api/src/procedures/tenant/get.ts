import { eq } from "drizzle-orm";
import z from "zod";
import { db } from "../../db";
import { tenantsTable } from "../../db/schema/tenants";
import { os } from "../../os";

export const getTenant = os.tenant.get.handler(async ({ input, errors }) => {
  const organizations = await db
    .select()
    .from(tenantsTable)
    .where(eq(tenantsTable.id, input.id));

  if (organizations.length === 0) {
    throw errors.NOT_FOUND();
  }

  return organizations[0];
});

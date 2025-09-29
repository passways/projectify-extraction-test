import { eq } from "drizzle-orm";
import z from "zod";
import { db } from "../../db";
import { tenantTable } from "../../db/schema/tenant";
import { os } from "../../os";

export const getTenant = os.tenant.get.handler(async ({ input, errors }) => {
  const organizations = await db
    .select()
    .from(tenantTable)
    .where(eq(tenantTable.id, input.id));

  if (organizations.length === 0) {
    throw errors.NOT_FOUND();
  }

  return organizations[0];
});

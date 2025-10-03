import { db } from "../../db";
import { tenantTable } from "../../db/schema/tenant";
import { base } from "../../middleware/base";

export const getAllTenantsProcedure = base.tenant.getAll.handler(
  async () => await db.select().from(tenantTable),
);

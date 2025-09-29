import { db } from "../../db";
import { tenantsTable } from "../../db/schema/tenants";
import { os } from "../../os";

export const getAllTenants = os.tenant.getAll.handler(
  async () => await db.select().from(tenantsTable),
);

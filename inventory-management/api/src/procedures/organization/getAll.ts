import { db } from "../../db";
import { organizationsTable } from "../../db/schema/organizations";
import { os } from "../../os";

export const getAllOrganizations = os.organizations.getAll.handler(
  async () => await db.select().from(organizationsTable),
);

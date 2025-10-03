import { eq } from "drizzle-orm";
import { db } from "../../db";
import { userInfoTable } from "../../db/schema/user-info";
import { base } from "../../middleware/base";

export const hasTenantProcedure = base.user.hasTenant.handler(
  async ({ context }) => {
    const { user } = context;

    const userInfoContent = await db
      .select()
      .from(userInfoTable)
      .where(eq(userInfoTable.userId, user.id));

    return userInfoContent.length > 0;
  },
);

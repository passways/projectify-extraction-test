import { ORPCError } from "@orpc/server";
import { eq } from "drizzle-orm";
import { db } from "../../db";
import { tenantTable } from "../../db/schema/tenant";
import { userInfoTable } from "../../db/schema/user-info";
import { base } from "../../middleware/base";

export const initializeSetup = base.setup.initialize.handler(
  async ({ input, context }) => {
    const { user } = context;

    const userInfoContent = await db
      .select()
      .from(userInfoTable)
      .where(eq(userInfoTable.userId, user.id));

    if (userInfoContent.length > 0) {
      throw new ORPCError("BAD_REQUEST", {
        message: "Setup has already been completed for this user.",
      });
    }

    await db.transaction(async (tx) => {
      const tenant = await tx
        .insert(tenantTable)
        .values({
          name: input.tenantName,
          description: input.tenantDescription,
          ownerId: user.id,
        })
        .returning();

      await tx.insert(userInfoTable).values({
        userId: user.id,
        primaryTenantId: tenant[0].id,
      });
    });
  },
);

import { eq } from "drizzle-orm";
import { db } from "../db";
import { userTable } from "../db/schema/user";
import { userInfoTable } from "../db/schema/user-info";

export async function isUserInitialized(userId: string): Promise<boolean> {
  const user = await db
    .select()
    .from(userTable)
    .leftJoin(userInfoTable, eq(userTable.id, userInfoTable.userId))
    .where(eq(userTable.id, userId));

  if (user.length === 0) {
    throw new Error("User not found");
  }

  const primaryTenantId = user[0].user_info?.primaryTenantId;

  return primaryTenantId !== undefined;
}

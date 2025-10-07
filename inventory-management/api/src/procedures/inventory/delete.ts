import { eq } from "drizzle-orm";
import { db } from "../../db";
import { inventoryTable } from "../../db/schema/inventory";
import { requireAuth } from "../../middleware/auth";

export const deleteInventoryProcedure = requireAuth.inventory.delete.handler(
  async ({ input: { id }, errors }) => {
    const result = await db
      .delete(inventoryTable)
      .where(eq(inventoryTable.id, id))
      .returning();

    if (result.length === 0) {
      throw errors.NOT_FOUND();
    }
  },
);

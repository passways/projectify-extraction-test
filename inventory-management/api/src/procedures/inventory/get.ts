import { eq } from "drizzle-orm";
import { db } from "../../db";
import { inventoryTable } from "../../db/schema/inventory";
import { requireAuth } from "../../middleware/auth";

export const getInventoryProcedure = requireAuth.inventory.get.handler(
  async ({ input, errors }) => {
    const inventory = await db
      .select()
      .from(inventoryTable)
      .where(eq(inventoryTable.id, input.id));

    if (inventory.length === 0) {
      throw errors.NOT_FOUND();
    }

    return inventory[0];
  },
);

import { eq } from "drizzle-orm";
import { db } from "../../db";
import { inventoryTable } from "../../db/schema/inventory";
import { requireAuth } from "../../middleware/auth";

export const updateInventoryProcedure = requireAuth.inventory.update.handler(
  async ({
    input: { id, name, description, quantity, ean, locationId },
    errors,
  }) => {
    const inventory = await db
      .update(inventoryTable)
      .set({
        name,
        description,
        quantity,
        ean,
        locationId,
      })
      .where(eq(inventoryTable.id, id))
      .returning();

    if (inventory.length === 0) {
      throw errors.NOT_FOUND();
    }

    return inventory[0];
  },
);

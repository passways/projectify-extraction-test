import { db } from "../../db";
import { inventoryTable } from "../../db/schema/inventory";
import { requireAuth } from "../../middleware/auth";

export const createInventoryProcedure = requireAuth.inventory.create.handler(
  async ({ input: { name, description, quantity, ean, locationId } }) => {
    const inventory = await db
      .insert(inventoryTable)
      .values({
        name,
        description,
        quantity,
        ean,
        locationId,
      })
      .returning();

    return inventory[0];
  },
);

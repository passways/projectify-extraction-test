import { db } from "../../db";
import { inventoryTable } from "../../db/schema/inventory";
import { requireAuth } from "../../middleware/require-auth";

export const getAllInventoryProcedure = requireAuth.inventory.getAll.handler(
  async () => {
    return await db.select().from(inventoryTable);
  },
);

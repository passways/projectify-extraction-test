import { db } from "../../db";
import { locationTable } from "../../db/schema/location";
import { requireAuth } from "../../middleware/auth";

export const getAllLocationProcedure = requireAuth.location.getAll.handler(
  async () => {
    return await db.select().from(locationTable);
  },
);

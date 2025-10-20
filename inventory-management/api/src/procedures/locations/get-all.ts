import { db } from "../../db";
import { LocationSchema, locationTable } from "../../db/schema/location";
import { requireAuth } from "../../middleware/require-auth";

export default requireAuth.output(LocationSchema.array()).handler(async () => {
  const locations = await db.select().from(locationTable);

  return locations;
});

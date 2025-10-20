import { db } from "../../db";
import { LocationSchema, locationTable } from "../../db/schema/location";
import { requireAuth } from "../../middleware/require-auth";

export default requireAuth
  .route({ path: "/locations", method: "GET", successStatus: 200 })
  .output(LocationSchema.array())
  .handler(async () => {
    const locations = await db.select().from(locationTable);

    return locations;
  });

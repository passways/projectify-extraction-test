import { db } from "../../db";
import { LocationSchema, locationTable } from "../../db/schema/location";
import { base } from "../../middleware/base";

export default base
  .route({ path: "/locations", method: "GET", successStatus: 200 })
  .output(LocationSchema.array())
  .handler(async () => {
    const locations = await db.select().from(locationTable);

    return locations;
  });

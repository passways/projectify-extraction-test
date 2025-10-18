import { db } from "../db";
import { LocationSchema, locationTable } from "../db/schema/location";
import { base } from "../middleware/base";

const getAllLocations = base
  .output(LocationSchema.array())
  .handler(async () => {
    const locations = await db.select().from(locationTable);

    return locations;
  });

export default {
  getAll: getAllLocations,
};

import { db } from "../../db";
import {
  LocationInsertSchema,
  LocationSchema,
  locationTable,
} from "../../db/schema/location";
import { base } from "../../middleware/base";

export default base
  .route({
    method: "POST",
    path: "/locations",
    successStatus: 201,
  })
  .input(LocationInsertSchema)
  .output(LocationSchema)
  .handler(async ({ input }) => {
    const location = await db.insert(locationTable).values(input).returning();
    return location[0];
  });

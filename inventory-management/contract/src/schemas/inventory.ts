import z from "zod";

export const InventorySchema = z.object({
  id: z.uuid(),
  name: z.string(),
  description: z.string().nullable(),
  quantity: z.number().min(0),
  locationId: z.uuid(),
  ean: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

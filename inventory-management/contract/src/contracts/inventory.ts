import { oc } from "@orpc/contract";
import z from "zod";
import { InventorySchema } from "../schemas/inventory.js";
import { notFoundError } from "../utils/errors.js";

const notFound = notFoundError("Item");

export const inventoryContract = {
  get: oc
    .route({
      method: "GET",
      successStatus: 200,
      tags: ["Inventory"],
      path: "/inventory/:id",
    })
    .input(z.object({ id: z.uuid() }))
    .output(InventorySchema)
    .errors(notFound),

  getAll: oc
    .route({
      method: "GET",
      successStatus: 200,
      tags: ["Inventory"],
      path: "/inventory",
    })
    .output(z.array(InventorySchema)),

  create: oc
    .route({
      method: "POST",
      successStatus: 201,
      tags: ["Inventory"],
      path: "/inventory",
    })
    .input(
      InventorySchema.omit({
        id: true,
        createdAt: true,
        updatedAt: true,
      }),
    )
    .output(InventorySchema),

  update: oc
    .route({
      method: "PUT",
      successStatus: 200,
      tags: ["Inventory"],
      path: "/inventory/:id",
    })
    .input(InventorySchema.omit({ createdAt: true, updatedAt: true }))
    .output(InventorySchema)
    .errors(notFound),

  delete: oc
    .route({
      method: "DELETE",
      successStatus: 204,
      tags: ["Inventory"],
      path: "/inventory/:id",
    })
    .input(z.object({ id: z.uuid() }))
    .errors(notFound),
};

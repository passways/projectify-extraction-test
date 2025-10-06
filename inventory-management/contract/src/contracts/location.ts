import { oc } from "@orpc/contract";
import z from "zod";

const locationSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  description: z.string().nullable(),
});

export const locationContract = {
  get: oc
    .route({
      method: "GET",
      path: "/locations/:id",
    })
    .input(z.object({ id: z.string().uuid() }))
    .output(locationSchema),
  getAll: oc
    .route({
      method: "GET",
      path: "/locations",
    })
    .output(z.array(locationSchema)),
  create: oc
    .route({
      method: "POST",
      path: "/locations",
    })
    .input(
      z.object({
        name: z.string(),
        description: z.string().nullable(),
      }),
    )
    .output(locationSchema),
  update: oc
    .route({
      method: "PUT",
      path: "/locations/:id",
    })
    .input(
      z.object({
        id: z.uuid(),
        name: z.string(),
        description: z.string().nullable(),
      }),
    )
    .output(locationSchema),
  delete: oc
    .route({
      method: "DELETE",
      path: "/locations/:id",
    })
    .input(z.uuid()),
};

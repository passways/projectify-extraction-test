import { oc } from "@orpc/contract";
import z from "zod";
import { LocationSchema } from "../schemas/location";
import { notFoundError } from "../utils/errors";

const notFound = notFoundError("Location");

export const locationContract = {
  get: oc
    .route({
      method: "GET",
      tags: ["Locations"],
      successStatus: 200,
      path: "/locations/:id",
    })
    .input(z.object({ id: z.uuid() }))
    .output(LocationSchema)
    .errors(notFound),

  getAll: oc
    .route({
      method: "GET",
      tags: ["Locations"],
      successStatus: 200,
      path: "/locations",
    })
    .output(z.array(LocationSchema)),

  create: oc
    .route({
      method: "POST",
      tags: ["Locations"],
      successStatus: 201,
      path: "/locations",
    })
    .input(LocationSchema.omit({ id: true, createdAt: true, updatedAt: true }))
    .output(LocationSchema),

  update: oc
    .route({
      method: "PUT",
      tags: ["Locations"],
      successStatus: 200,
      path: "/locations/:id",
    })
    .input(LocationSchema.omit({ createdAt: true, updatedAt: true }))
    .output(LocationSchema)
    .errors(notFound),

  delete: oc
    .route({
      method: "DELETE",
      tags: ["Locations"],
      successStatus: 204,
      path: "/locations/:id",
    })
    .input(z.uuid())
    .errors(notFound),
};

import { oc } from "@orpc/contract";
import z from "zod";

const locationSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  description: z.string().nullable(),
});

export const locationContract = {
  get: oc.input(z.uuid()).output(locationSchema),
  getAll: oc.output(z.array(locationSchema)),
  create: oc
    .input(
      z.object({
        name: z.string(),
        description: z.string().nullable(),
      }),
    )
    .output(locationSchema),
  update: oc
    .input(
      z.object({
        id: z.uuid(),
        name: z.string(),
        description: z.string().nullable(),
      }),
    )
    .output(locationSchema),
  delete: oc.input(z.uuid()),
};

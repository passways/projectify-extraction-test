import { oc } from "@orpc/contract";
import z from "zod";

const tenantSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  description: z.string().nullable(),
});

export const tenantContract = {
  getAll: oc.output(z.array(tenantSchema)),
  get: oc
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .output(tenantSchema)
    .errors({
      NOT_FOUND: {
        message: "Organization not found",
      },
    }),
};

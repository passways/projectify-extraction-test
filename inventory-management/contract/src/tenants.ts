import { oc } from "@orpc/contract";
import z from "zod";

const tenantSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  description: z.string().nullable(),
});

export const getTenantContract = oc
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
  });

export const getAllTenantsContract = oc.output(z.array(tenantSchema));

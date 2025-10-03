import { oc } from "@orpc/contract";
import z from "zod";

const tenantSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  description: z.string().nullable(),
});

export const tenantContract = {
  getAll: oc
    .route({
      method: "GET",
      tags: ["Tenant"],
      path: "/tenants",
    })
    .output(z.array(tenantSchema)),
  get: oc
    .route({
      method: "GET",
      tags: ["Tenant"],
      path: "/tenants/:id",
    })
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

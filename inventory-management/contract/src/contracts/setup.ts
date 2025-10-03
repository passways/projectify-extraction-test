import { oc } from "@orpc/contract";
import z from "zod";

export const setupContract = {
  initialize: oc
    .route({
      method: "POST",
      tags: ["Setup"],
      path: "/setup/initialize",
    })
    .input(
      z.object({
        tenantName: z.string().max(255).trim(),
        tenantDescription: z.string().max(255).trim().nullable(),
      }),
    ),
};

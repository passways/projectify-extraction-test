import { oc } from "@orpc/contract";
import z from "zod";

const organizationSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  description: z.string().nullable(),
});

export const getOrganization = oc
  .input(
    z.object({
      id: z.string(),
    }),
  )
  .output(organizationSchema)
  .errors({
    NOT_FOUND: {
      message: "Organization not found",
    },
  });

export const getAllOrganizations = oc.output(z.array(organizationSchema));

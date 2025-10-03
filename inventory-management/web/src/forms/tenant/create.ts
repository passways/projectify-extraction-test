import { formOptions } from "@tanstack/react-form";
import z from "zod";

export const createTenantForm = formOptions({
  defaultValues: {
    name: "",
    description: "",
  },
  validators: {
    onChange: z.object({
      name: z.string().min(1),
      description: z.string(),
    }),
  },
});

import { formOptions } from "@tanstack/react-form";
import z from "zod";

export const newLocationForm = formOptions({
  defaultValues: {
    name: "",
    description: "",
  },
  validators: {
    onChange: z.object({
      name: z.string().trim().min(1),
      description: z.string(),
    }),
  },
});

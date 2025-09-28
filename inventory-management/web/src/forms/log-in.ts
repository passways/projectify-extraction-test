import { formOptions } from "@tanstack/react-form";
import z from "zod";

export const loginForm = formOptions({
  defaultValues: {
    email: "",
    password: "",
  },
  validators: {
    onChange: z.object({
      email: z.email(),
      password: z.string().min(8),
    }),
  }
});
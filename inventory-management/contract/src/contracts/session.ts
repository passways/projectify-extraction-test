import { oc } from "@orpc/contract";
import z from "zod";

export const sessionContract = {
  signIn: oc
    .route({
      method: "POST",
      successStatus: 200,
      tags: ["Session"],
      path: "/session/sign-in",
    })
    .input(
      z.object({ email: z.string().email(), password: z.string().min(8) }),
    ),
  signOut: oc.route({
    method: "POST",
    successStatus: 200,
    tags: ["Session"],
    path: "/session/sign-out",
  }),
};

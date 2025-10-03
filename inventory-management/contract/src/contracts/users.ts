import { oc } from "@orpc/contract";
import z from "zod";

export const usersContract = {
  hasTenant: oc
    .route({
      method: "GET",
      tags: ["User"],
      path: "/users/:id/has-tenant",
    })
    .output(z.boolean()),
};

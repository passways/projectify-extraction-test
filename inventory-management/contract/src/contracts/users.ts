import { oc } from "@orpc/contract";
import z from "zod";

export const usersContract = {
  hasTenant: oc.output(z.boolean()),
};

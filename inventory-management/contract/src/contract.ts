import { oc } from "@orpc/contract";
import z from "zod";
import { inventoryContract } from "./contracts/inventory";
import { locationContract } from "./contracts/location";
import { sessionContract } from "./contracts/session";

export const contract = {
  session: sessionContract,
  location: locationContract,
  inventory: inventoryContract,
  setup: oc
    .input(
      z.object({
        name: z.string().trim().min(1),
        email: z.email(),
        password: z.string().trim().min(8),
      }),
    )
    .errors({
      INTERNAL_SERVER_ERROR: {
        status: 500,
        description: "Failed to create user",
      },
    }),
};

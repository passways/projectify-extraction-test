import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import type { ContractRouterClient } from "@orpc/contract";
import type { contract } from "@projectify/inma-contract";
import { auth0 } from "./auth0";

const link = new RPCLink({
  url: import.meta.env.VITE_API_URL,
  headers: async () => {
    const token = await auth0.getTokenSilently();

    return {
      Authorization: `Bearer ${token}`,
    };
  },
});

export const orpc: ContractRouterClient<typeof contract> =
  createORPCClient(link);

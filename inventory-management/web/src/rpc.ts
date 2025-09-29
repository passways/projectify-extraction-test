import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import type { ContractRouterClient } from "@orpc/contract";
import type { contract } from "@projectify/inma-contract";

const link = new RPCLink({
  url: "http://127.0.0.1:3000",
  headers: { Authorization: "Bearer token" },
});

export const orpc: ContractRouterClient<typeof contract> =
  createORPCClient(link);

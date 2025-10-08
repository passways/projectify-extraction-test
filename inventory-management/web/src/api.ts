import { createORPCClient } from "@orpc/client";
import type { ContractRouterClient } from "@orpc/contract";
import type { JsonifiedClient } from "@orpc/openapi-client";
import { OpenAPILink } from "@orpc/openapi-client/fetch";
import { contract } from "@projectify/inma-contract";

const link = new OpenAPILink(contract, {
  url: import.meta.env.VITE_API_URL,
});

export const apiClient: JsonifiedClient<ContractRouterClient<typeof contract>> =
  createORPCClient(link);

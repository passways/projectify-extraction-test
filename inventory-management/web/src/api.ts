import { createORPCClient } from "@orpc/client";
import type { ContractRouterClient } from "@orpc/contract";
import type { JsonifiedClient } from "@orpc/openapi-client";
import { OpenAPILink } from "@orpc/openapi-client/fetch";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";
import { contract } from "@projectify/inma-contract";

const link = new OpenAPILink(contract, {
  url: import.meta.env.VITE_API_URL,
  fetch: (request, init) =>
    globalThis.fetch(request, {
      ...init,
      credentials: "include",
    }),
});

export const apiClient: JsonifiedClient<ContractRouterClient<typeof contract>> =
  createORPCClient(link);

export const queryClient = createTanstackQueryUtils(apiClient);

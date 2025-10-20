import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import type { RouterClient } from "@orpc/server";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";
import type { router } from "../../../api/src/router";

const link = new RPCLink({
  url: import.meta.env.VITE_API_URL,
  fetch: (request, init) => {
    return globalThis.fetch(request, {
      ...init,
      credentials: "include",
    });
  },
});

export const orpcClient: RouterClient<typeof router> = createORPCClient(link);
export const orpcQueryClient = createTanstackQueryUtils(orpcClient);

import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import type { RouterClient } from "@orpc/server";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";
import type { router } from "../../../api/src/router";

const link = new RPCLink({
  url: "http://127.0.0.1:3000",
  fetch: (request, init) => {
    return globalThis.fetch(request, {
      ...init,
      credentials: "include",
    });
  },
});

export const orpcClient: RouterClient<typeof router> = createORPCClient(link);
export const orpcQueryClient = createTanstackQueryUtils(orpcClient);

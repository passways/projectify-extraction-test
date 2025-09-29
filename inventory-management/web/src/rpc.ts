import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import type { ContractRouterClient } from "@orpc/contract";
import type { contract } from "@projectify/inma-contract";
import { router } from "./main";
import { supabase } from "./supabase";

const link = new RPCLink({
  url: "http://127.0.0.1:3080",
  headers: async () => {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      router.navigate({
        to: "/logout",
      });
      throw error;
    }

    return {
      Authorization: `Bearer ${data.session?.access_token}`,
    };
  },
});

export const orpc: ContractRouterClient<typeof contract> =
  createORPCClient(link);

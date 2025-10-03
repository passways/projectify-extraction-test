import { createFileRoute, redirect } from "@tanstack/react-router";
import { auth0 } from "../auth0";
import { orpc } from "../rpc";

export const Route = createFileRoute("/authenticate")({
  loader: async () => {
    await auth0.handleRedirectCallback();

    const isUserInitialized = await orpc.setup.isUserInitialized();

    if (!isUserInitialized) {
      return redirect({
        to: "/setup",
        replace: true,
      });
    }

    return redirect({
      to: "/dashboard",
      replace: true,
    });
  },
});

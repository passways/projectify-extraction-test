import { createFileRoute, redirect } from "@tanstack/react-router";
import { auth0 } from "../auth0";

export const Route = createFileRoute("/authenticate")({
  loader: async () => {
    await auth0.handleRedirectCallback();

    return redirect({
      to: "/dashboard",
      replace: true,
    });
  },
});

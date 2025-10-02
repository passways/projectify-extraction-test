import { createFileRoute, redirect } from "@tanstack/react-router";
import { auth0 } from "../auth0";

export const Route = createFileRoute("/logout")({
  loader: async () => {
    await auth0.logout();
    return redirect({ to: "/login", replace: true });
  },
});

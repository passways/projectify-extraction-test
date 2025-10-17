import { createFileRoute, redirect } from "@tanstack/react-router";
import { authClient } from "../utils/auth-client";

export const Route = createFileRoute("/logout")({
  loader: async () => {
    await authClient.signOut();
    return redirect({ to: "/login", replace: true });
  },
});

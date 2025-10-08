import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/logout")({
  loader: async () => {
    return redirect({ to: "/login", replace: true });
  },
});

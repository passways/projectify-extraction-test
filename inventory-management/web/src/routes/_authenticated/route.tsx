import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  component: () => <Outlet />,
  loader: async () => {
    const isAuthenticated = true;

    if (!isAuthenticated) {
      return redirect({
        to: "/login",
        replace: true,
      });
    }
  },
});

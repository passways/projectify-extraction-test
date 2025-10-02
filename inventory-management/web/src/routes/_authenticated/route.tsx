import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { auth0 } from "../../auth0";

export const Route = createFileRoute("/_authenticated")({
  component: () => <Outlet />,
  loader: async () => {
    const isAuthenticated = await auth0.isAuthenticated();

    console.log("isAuthenticated", isAuthenticated);

    if (!isAuthenticated) {
      return redirect({
        to: "/login",
        replace: true,
      });
    }
  },
});

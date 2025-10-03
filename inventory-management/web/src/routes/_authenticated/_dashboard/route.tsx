import { AppShell } from "@mantine/core";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { Navbar } from "../../../components/navbar/navbar";
import { orpc } from "../../../rpc";

export const Route = createFileRoute("/_authenticated/_dashboard")({
  component: RouteComponent,
  loader: async () => {
    const isUserInitialized = await orpc.user.hasTenant();

    if (!isUserInitialized)
      return redirect({
        to: "/setup",
        replace: true,
      });
  },
});

function RouteComponent() {
  return (
    <AppShell
      padding={"md"}
      navbar={{
        width: { base: 250 },
        breakpoint: "sm",
        collapsed: { mobile: true },
      }}
    >
      <AppShell.Navbar p={"md"}>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

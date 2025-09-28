import { AppShell } from "@mantine/core";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "../../../components/navbar/navbar";

export const Route = createFileRoute("/_authenticated/_dashboard")({
  component: RouteComponent,
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

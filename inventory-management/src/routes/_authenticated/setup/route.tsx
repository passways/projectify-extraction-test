import { Center } from "@mantine/core";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/setup")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Center h={"100svh"}>
      <Outlet />
    </Center>
  );
}

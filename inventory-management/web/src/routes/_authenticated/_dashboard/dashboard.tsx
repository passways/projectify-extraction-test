import { Stack, Title } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_dashboard/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Stack>
      <Title order={1}>Dashboard</Title>
    </Stack>
  );
}

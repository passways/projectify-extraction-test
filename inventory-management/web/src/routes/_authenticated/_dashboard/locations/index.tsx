import { Stack, Title } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_dashboard/locations/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Stack>
      <Title order={2}>Locations</Title>
    </Stack>
  );
}

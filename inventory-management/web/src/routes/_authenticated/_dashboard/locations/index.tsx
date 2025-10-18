import { Button, Group, Stack, Title } from "@mantine/core";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_dashboard/locations/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Stack>
      <Group justify="space-between">
        <Title order={2}>Locations</Title>
        <Link to="/locations/new">
          <Button>Create</Button>
        </Link>
      </Group>
    </Stack>
  );
}

import { Button, Group, Stack, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { orpcQueryClient } from "../../../../utils/orpc-client";

export const Route = createFileRoute("/_authenticated/_dashboard/locations/")({
  component: RouteComponent,
});

function RouteComponent() {
  const query = useQuery(orpcQueryClient.locations.getAll.queryOptions());

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

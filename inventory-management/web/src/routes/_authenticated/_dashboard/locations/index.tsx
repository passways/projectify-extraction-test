import { Stack, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { queryClient } from "../../../../api";

export const Route = createFileRoute("/_authenticated/_dashboard/locations/")({
  component: RouteComponent,
});

function RouteComponent() {
  const query = useQuery(queryClient.location.getAll.queryOptions());

  return (
    <Stack>
      <Title order={2}>Locations</Title>
    </Stack>
  );
}

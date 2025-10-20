import { Button, Stack, Textarea, TextInput, Title } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_authenticated/_dashboard/locations/new",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Stack>
      <Title order={2}>New Location</Title>
      <TextInput label="Name" placeholder="Warehouse" required />
      <Textarea label="Description" placeholder="Main warehouse" />
      <Button>Create</Button>
    </Stack>
  );
}

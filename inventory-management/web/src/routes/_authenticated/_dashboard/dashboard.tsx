import { Button, Stack, Title } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { orpc } from "../../../rpc";

export const Route = createFileRoute("/_authenticated/_dashboard/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Stack>
      <Title order={1}>Dashboard</Title>
      <Button onClick={() => orpc.setup.isUserInitialized()}>Click me</Button>
    </Stack>
  );
}

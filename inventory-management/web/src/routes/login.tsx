import { Button, Center } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Center h={"100svh"}>
      <Button onClick={async () => {}}>Log In</Button>
    </Center>
  );
}

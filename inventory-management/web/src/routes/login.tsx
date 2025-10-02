import { Button, Center } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { auth0 } from "../auth0";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Center h={"100svh"}>
      <Button onClick={async () => auth0.loginWithRedirect()}>Log In</Button>
    </Center>
  );
}

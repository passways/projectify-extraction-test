import {
  Button,
  Center,
  Checkbox,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  return (
    <Center h={"100svh"}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <Stack miw={400}>
          <Title order={1}>Log In</Title>
          <TextInput label="Email" type="email" required />
          <TextInput label="Password" type="password" required />
          <Checkbox label="Remember Me" />
          <Button type="submit">Log In</Button>
        </Stack>
      </form>
    </Center>
  );
}

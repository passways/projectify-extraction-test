import { Button, Center, Stack, TextInput, Title } from "@mantine/core";
import { useForm } from "@tanstack/react-form";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { loginForm } from "../forms/log-in";
import { authClient } from "../utils/auth-client";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { Field, handleSubmit, Subscribe } = useForm({
    ...loginForm,
    onSubmit: async ({ value }) => {
      await authClient.signIn.email({
        email: value.email,
        password: value.password,
      });

      navigate({ to: "/dashboard", replace: true });
    },
  });

  return (
    <Center h={"100svh"}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Stack miw={400}>
          <Title order={1}>Log In</Title>
          <Field
            name="email"
            children={({ state, handleChange, handleBlur }) => (
              <TextInput
                defaultValue={state.value}
                type="email"
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
                placeholder="Enter your email"
                label="Email"
                withAsterisk
              />
            )}
          />
          <Field
            name="password"
            children={({ state, handleChange, handleBlur }) => (
              <TextInput
                defaultValue={state.value}
                type="password"
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
                placeholder="Enter your password"
                label="Password"
                withAsterisk
              />
            )}
          />
          <Subscribe
            selector={(state) => [state.canSubmit, state.isDirty]}
            children={([canSubmit, isDirty]) => (
              <Button type="submit" disabled={!canSubmit || !isDirty}>
                Log In
              </Button>
            )}
          />
        </Stack>
      </form>
    </Center>
  );
}

import { Button, Center, Stack, TextInput, Title } from "@mantine/core";
import { useForm } from "@tanstack/react-form";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { loginForm } from "../forms/log-in";
import { supabase } from "../supabase";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const form = useForm({
    ...loginForm,
    onSubmit: async (state) => {
      const { error } = await supabase.auth.signInWithPassword({
        email: state.value.email,
        password: state.value.password,
      });

      if (error) return;

      const { data } = await supabase.from("user_info").select();

      if (data?.length === 0) {
        navigate({
          to: "/setup/create-organization",
          replace: true,
        });
      } else {
        navigate({
          to: "/dashboard",
          replace: true,
        });
      }
    },
  });

  return (
    <Center h={"100svh"}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <Stack miw={400}>
          <Title order={1}>Log In</Title>
          <form.Field
            name="email"
            children={({ state, handleChange, handleBlur }) => (
              <TextInput
                label="Email"
                type="email"
                defaultValue={state.value}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
                required
              />
            )}
          />
          <form.Field
            name="password"
            children={({ state, handleChange, handleBlur }) => (
              <TextInput
                label="Password"
                type="password"
                defaultValue={state.value}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
                required
              />
            )}
          />
          <form.Subscribe
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

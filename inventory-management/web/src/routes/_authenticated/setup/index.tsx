import { Button, Stack, TextInput, Title } from "@mantine/core";
import { useForm } from "@tanstack/react-form";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import z from "zod";
import { apiClient } from "../../../api";

export const Route = createFileRoute("/_authenticated/setup/")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    validators: {
      onChange: z.object({
        name: z.string().trim().min(1),
        email: z.email(),
        password: z.string().trim().min(8),
      }),
    },
    onSubmit: async ({ value }) => {
      const result = await apiClient.setup(value);

      navigate({
        to: "/dashboard",
        replace: true,
      });
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <Stack miw={400}>
        <Title order={1}>Set up your admin account</Title>
        <form.Field
          name="name"
          children={({ state, handleChange, handleBlur }) => (
            <TextInput
              label="Name"
              type="text"
              defaultValue={state.value}
              onChange={(e) => handleChange(e.target.value)}
              onBlur={handleBlur}
              required
            />
          )}
        />
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
            <Button
              type="submit"
              disabled={!canSubmit || !isDirty}
              onClick={() => form.handleSubmit()}
            >
              Set up
            </Button>
          )}
        />
      </Stack>
    </form>
  );
}

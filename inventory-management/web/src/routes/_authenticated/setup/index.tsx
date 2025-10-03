import { Button, Stack, Textarea, TextInput, Title } from "@mantine/core";
import { useForm } from "@tanstack/react-form";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { createOrganizationForm } from "../../../forms/organizations/create";

export const Route = createFileRoute("/_authenticated/setup/")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const form = useForm({
    ...createOrganizationForm,
    onSubmit: async () => {
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
        form.handleSubmit();
      }}
    >
      <Stack miw={400}>
        <Title order={1}>Create your tenant</Title>
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
          name="description"
          children={({ state, handleChange, handleBlur }) => (
            <Textarea
              label="Description"
              defaultValue={state.value}
              onChange={(e) => handleChange(e.target.value)}
              onBlur={handleBlur}
            />
          )}
        />
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isDirty]}
          children={([canSubmit, isDirty]) => (
            <Button type="submit" disabled={!canSubmit || !isDirty}>
              Create
            </Button>
          )}
        />
      </Stack>
    </form>
  );
}

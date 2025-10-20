import { Button, Stack, Textarea, TextInput, Title } from "@mantine/core";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { newLocationForm } from "../../../../forms/new-location";
import { orpcQueryClient } from "../../../../utils/orpc-client";

export const Route = createFileRoute(
  "/_authenticated/_dashboard/locations/new",
)({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { Subscribe, Field, handleSubmit } = useForm({
    ...newLocationForm,
    onSubmit: async ({ value }) => {
      await mutateAsync({
        name: value.name,
        description: value.description,
      });

      navigate({ to: "/locations" });
    },
  });

  const { mutateAsync, isPending } = useMutation(
    orpcQueryClient.locations.create.mutationOptions(),
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Stack>
        <Title order={2}>New Location</Title>
        <Field
          name="name"
          children={({ handleBlur, handleChange }) => (
            <TextInput
              label="Name"
              placeholder="Warehouse"
              onChange={(e) => handleChange(e.target.value)}
              onBlur={handleBlur}
              required
            />
          )}
        />
        <Field
          name="description"
          children={({ handleBlur, handleChange }) => (
            <Textarea
              label="Description"
              onChange={(e) => handleChange(e.target.value)}
              onBlur={handleBlur}
            />
          )}
        />
        <Subscribe
          selector={(state) => [state.canSubmit, state.isDirty]}
          children={([canSubmit, isDirty]) => (
            <Button
              type="submit"
              disabled={!canSubmit || !isDirty || isPending}
            >
              Create
            </Button>
          )}
        />
      </Stack>
    </form>
  );
}

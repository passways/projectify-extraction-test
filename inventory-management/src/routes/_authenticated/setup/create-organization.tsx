import { useForm } from "@tanstack/react-form";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { createOrganizationForm } from "../../../forms/organizations/create";
import { Stack, Title, TextInput, Button, Textarea } from "@mantine/core";
import { supabase } from "../../../db/supabase";

export const Route = createFileRoute(
  "/_authenticated/setup/create-organization",
)({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const form = useForm({
    ...createOrganizationForm,
    onSubmit: async (state) => {
      const user = await supabase.auth.getUser();
      const userId = user.data?.user?.id;
      if (!userId) return;

      const { data, error } = await supabase
        .from("organizations")
        .insert({
          name: state.value.name,
          description: state.value.description,
          owner_id: userId,
        })
        .select();

      if (error || !data) return;

      await supabase.from("user_info").insert({
        user_id: userId,
        primary_organization_id: data[0].id,
      });

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
        <Title order={1}>Create your organization</Title>
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

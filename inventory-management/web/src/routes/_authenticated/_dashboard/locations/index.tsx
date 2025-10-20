import { ActionIcon, Button, Group, Stack, Table, Title } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { orpcQueryClient } from "../../../../utils/orpc-client";

export const Route = createFileRoute("/_authenticated/_dashboard/locations/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, refetch } = useQuery(
    orpcQueryClient.locations.getAll.queryOptions(),
  );
  const { mutateAsync } = useMutation(
    orpcQueryClient.locations.delete.mutationOptions(),
  );

  return (
    <Stack>
      <Group justify="space-between">
        <Title order={2}>Locations</Title>
        <Link to="/locations/new">
          <Button>Create</Button>
        </Link>
      </Group>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data?.map((location) => (
            <Table.Tr key={location.id}>
              <Table.Td>{location.name}</Table.Td>
              <Table.Td>{location.description}</Table.Td>
              <Table.Td>
                <ActionIcon
                  color="red"
                  onClick={async () => {
                    await mutateAsync({ id: location.id });
                    refetch();
                  }}
                >
                  <IconTrash size={14} />
                </ActionIcon>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Stack>
  );
}

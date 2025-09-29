import { Flex, NavLink, Stack, type NavLinkProps } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import {
  IconBuildingWarehouse,
  IconLayoutDashboard,
  IconLogout,
} from "@tabler/icons-react";

export function Navbar() {
  return (
    <Stack justify="space-between" h={"100%"}>
      <div>
        <Flex></Flex>
        <StyledLink
          leftSection={<IconLayoutDashboard size={16} />}
          label="Dashboard"
          to="/dashboard"
        />
        <StyledLink
          leftSection={<IconBuildingWarehouse size={16} />}
          label="Inventory"
          to="/inventory"
        />
      </div>
      <div>
        <StyledLink
          leftSection={<IconLogout size={16} />}
          label="Log Out"
          to="/logout"
        />
      </div>
    </Stack>
  );
}

const StyledLink = (props: NavLinkProps & { to: string }) => {
  return (
    <NavLink
      style={{
        borderRadius: "var(--mantine-radius-sm)",
      }}
      component={Link}
      {...props}
    />
  );
};

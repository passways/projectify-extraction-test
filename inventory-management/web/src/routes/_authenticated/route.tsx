import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { supabase } from "../../db/supabase";

export const Route = createFileRoute("/_authenticated")({
  component: () => <Outlet />,
  loader: async () => {
    const { error } = await supabase.auth.getUser();

    if (error) {
      throw redirect({
        to: "/login",
        replace: true,
      });
    }
  },
});

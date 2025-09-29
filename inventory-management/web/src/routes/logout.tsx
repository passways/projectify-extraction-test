import { createFileRoute, redirect } from "@tanstack/react-router";
import { supabase } from "../supabase";

export const Route = createFileRoute("/logout")({
  loader: async () => {
    await supabase.auth.signOut();

    throw redirect({
      to: "/login",
      replace: true,
    });
  },
});

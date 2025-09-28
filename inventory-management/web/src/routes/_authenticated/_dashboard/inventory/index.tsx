import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_dashboard/inventory/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_authenticated/inventory/"!</div>;
}

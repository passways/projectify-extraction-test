import { os } from "@orpc/server";
import { getOrganizations } from "./procedures/organization/get";
import { getAllOrganizations } from "./procedures/organization/getAll";

export const router = os.router({
  organizations: {
    get: getOrganizations,
    getAll: getAllOrganizations,
  },
});

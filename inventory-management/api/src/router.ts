import { os } from "@orpc/server";
import { getTenant } from "./procedures/tenant/get";
import { getAllTenants } from "./procedures/tenant/getAll";

export const router = os.router({
  tenants: {
    get: getTenant,
    getAll: getAllTenants,
  },
});

import { orpc } from "./orpc";
import { initializeSetup } from "./procedures/setup/initialize";
import { getTenant } from "./procedures/tenant/get";
import { getAllTenants } from "./procedures/tenant/getAll";

export const router = orpc.router({
  tenant: {
    get: getTenant,
    getAll: getAllTenants,
  },
  setup: {
    initialize: initializeSetup,
  },
});

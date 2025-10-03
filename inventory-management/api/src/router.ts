import { orpc } from "./orpc";
import { initializeProcedure } from "./procedures/setup/initialize";
import { getTenantProcedure } from "./procedures/tenant/get";
import { getAllTenantsProcedure } from "./procedures/tenant/get-all";
import { hasTenantProcedure } from "./procedures/users/has-tenant";

export const router = orpc.router({
  tenant: {
    get: getTenantProcedure,
    getAll: getAllTenantsProcedure,
  },
  setup: {
    initialize: initializeProcedure,
  },
  user: {
    hasTenant: hasTenantProcedure,
  },
});

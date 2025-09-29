import { getAllTenantsContract, getTenantContract } from "./tenants";

export const contract = {
  tenant: {
    get: getTenantContract,
    getAll: getAllTenantsContract,
  },
};

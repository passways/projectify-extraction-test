import { getAllTenantsContract, getTenantContract } from "./contracts/tenants";

export const contract = {
  tenant: {
    get: getTenantContract,
    getAll: getAllTenantsContract,
  },
};

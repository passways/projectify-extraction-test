import { setupContract } from "./contracts/setup";
import { tenantContract } from "./contracts/tenants";

export const contract = {
  tenant: tenantContract,
  setup: setupContract,
};

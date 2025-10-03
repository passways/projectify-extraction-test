import { setupContract } from "./contracts/setup";
import { tenantContract } from "./contracts/tenants";
import { usersContract as userContract } from "./contracts/users";

export const contract = {
  tenant: tenantContract,
  setup: setupContract,
  user: userContract,
};

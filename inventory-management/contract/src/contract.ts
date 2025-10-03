import { locationContract } from "./contracts/location";
import { setupContract } from "./contracts/setup";
import { tenantContract } from "./contracts/tenant";
import { usersContract as userContract } from "./contracts/users";

export const contract = {
  tenant: tenantContract,
  setup: setupContract,
  user: userContract,
  location: locationContract,
};

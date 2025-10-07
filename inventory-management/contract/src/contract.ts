import { inventoryContract } from "./contracts/inventory";
import { locationContract } from "./contracts/location";
import { sessionContract } from "./contracts/session";

export const contract = {
  session: sessionContract,
  location: locationContract,
  inventory: inventoryContract,
};

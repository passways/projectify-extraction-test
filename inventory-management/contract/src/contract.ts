import { locationContract } from "./contracts/location";
import { sessionContract } from "./schemas/session";

export const contract = {
  session: sessionContract,
  location: locationContract,
};

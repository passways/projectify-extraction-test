import { orpc } from "./orpc";
import { signInProcedure } from "./procedures/auth/sign-in";
import { signOutProcedure } from "./procedures/auth/sign-out";
import { createInventoryProcedure } from "./procedures/inventory/create";
import { deleteInventoryProcedure } from "./procedures/inventory/delete";
import { getInventoryProcedure } from "./procedures/inventory/get";
import { getAllInventoryProcedure } from "./procedures/inventory/get-all";
import { updateInventoryProcedure } from "./procedures/inventory/update";
import { createLocationProcedure } from "./procedures/location/create";
import { deleteLocationProcedure } from "./procedures/location/delete";
import { getLocationProcedure } from "./procedures/location/get";
import { getAllLocationProcedure } from "./procedures/location/get-all";
import { updateLocationProcedure } from "./procedures/location/update";
import { setupProcedure } from "./procedures/setup";

export const router = orpc.router({
  auth: {
    signIn: signInProcedure,
    signOut: signOutProcedure,
  },
  location: {
    getAll: getAllLocationProcedure,
    get: getLocationProcedure,
    create: createLocationProcedure,
    update: updateLocationProcedure,
    delete: deleteLocationProcedure,
  },
  inventory: {
    getAll: getAllInventoryProcedure,
    get: getInventoryProcedure,
    create: createInventoryProcedure,
    update: updateInventoryProcedure,
    delete: deleteInventoryProcedure,
  },
  setup: setupProcedure,
});

import { orpc } from "./orpc";
import { createLocationProcedure } from "./procedures/location/create";
import { deleteLocationProcedure } from "./procedures/location/delete";
import { getLocationProcedure } from "./procedures/location/get";
import { getAllLocationProcedure } from "./procedures/location/get-all";
import { updateLocationProcedure } from "./procedures/location/update";
import { signInProcedure } from "./procedures/session/sign-in";
import { signOutProcedure } from "./procedures/session/sign-out";

export const router = orpc.router({
  session: {
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
});

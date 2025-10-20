import createLocation from "./procedures/locations/create";
import deleteLocation from "./procedures/locations/delete";
import getLocation from "./procedures/locations/get";
import getAllLocations from "./procedures/locations/get-all";
import updateLocation from "./procedures/locations/update";

export const router = {
  locations: {
    getAll: getAllLocations,
    get: getLocation,
    create: createLocation,
    delete: deleteLocation,
    update: updateLocation,
  },
};

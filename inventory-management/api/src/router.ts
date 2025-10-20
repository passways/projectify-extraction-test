import createLocation from "./procedures/locations/create";
import deleteLocation from "./procedures/locations/delete";
import getLocation from "./procedures/locations/get";
import getAllLocations from "./procedures/locations/get-all";

export const router = {
  locations: {
    getAll: getAllLocations,
    get: getLocation,
    create: createLocation,
    delete: deleteLocation,
  },
};

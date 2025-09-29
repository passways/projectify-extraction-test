import { getAllOrganizations, getOrganization } from "./organizations";

export const contract = {
  organizations: {
    get: getOrganization,
    getAll: getAllOrganizations,
  },
};

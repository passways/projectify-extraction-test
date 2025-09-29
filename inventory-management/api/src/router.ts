import { getOrganizations } from "./routes/organization/get";

export const router = {
  organizations: {
    get: getOrganizations,
  },
};

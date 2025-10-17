import { deleteCookie } from "@orpc/server/helpers";
import { requireAuth } from "../../middleware/require-auth";

export const signOutProcedure = requireAuth.auth.signOut.handler(
  async ({ context }) => {
    deleteCookie(context.resHeaders, `better_auth.session_token`);
  },
);

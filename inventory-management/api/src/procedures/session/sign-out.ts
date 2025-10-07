import { deleteCookie } from "@orpc/server/helpers";
import { requireAuth } from "../../middleware/auth";
import { cookiePrefix } from "../../utils/auth";

export const signOutProcedure = requireAuth.session.signOut.handler(
  async ({ context }) => {
    deleteCookie(context.resHeaders, `${cookiePrefix}.session_token`);
  },
);

import { setCookie } from "@orpc/server/helpers";
import { base } from "../../middleware/base";
import { auth, cookiePrefix } from "../../utils/auth";

export const signInProcedure = base.session.signIn.handler(
  async ({ input, context }) => {
    const data = await auth.api.signInEmail({
      body: {
        email: input.email,
        password: input.password,
      },
    });

    setCookie(context.resHeaders, `${cookiePrefix}.session_token`, data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
  },
);

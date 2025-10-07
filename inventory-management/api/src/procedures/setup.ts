import { setCookie } from "@orpc/server/helpers";
import { base } from "../middleware/base";
import { auth, cookiePrefix } from "../utils/auth";

export const setupProcedure = base.setup.handler(
  async ({ context, input: { email, password, name }, errors }) => {
    const { token } = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });

    if (!token) {
      throw errors.INTERNAL_SERVER_ERROR();
    }

    setCookie(context.resHeaders, `${cookiePrefix}.session-token`, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
  },
);

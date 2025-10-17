import { setCookie } from "@orpc/server/helpers";
import { base } from "../middleware/base";
import { auth } from "../utils/auth";

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

    setCookie(context.resHeaders, `better_auth.session-token`, token, {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 3600,
    });
  },
);

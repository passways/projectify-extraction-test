import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db";
import * as authSchema from "../db/schema/auth";

export const auth = betterAuth({
  basePath: "/auth",
  emailAndPassword: {
    enabled: true,
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      ...authSchema,
    },
  }),
  advanced: {
    useSecureCookies: true,
    cookiePrefix: "inma",
    defaultCookieAttributes: {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      partitioned: true,
    },
  },
  trustedOrigins: ["http://localhost:3080"],
});

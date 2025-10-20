import { ORPCError } from "@orpc/server";
import { auth } from "../utils/auth";
import { base } from "./base";

const authMiddleware = base.middleware(async ({ context, next }) => {
  if (!context.reqHeaders) {
    throw new ORPCError("UNAUTHORIZED");
  }

  const session = await auth.api.getSession({
    headers: context.reqHeaders,
  });

  if (!session) {
    throw new ORPCError("UNAUTHORIZED");
  }

  return next({ context: { ...context, session } });
});

export const requireAuth = base.use(authMiddleware);

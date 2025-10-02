import { ORPCError } from "@orpc/server";
import { orpc } from "../orpc";
import { verifyJWT } from "../utils/auth/jwt";

export const requireAuth = orpc.middleware(async ({ context, next }) => {
  const authHeader = context.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    throw new ORPCError("UNAUTHORIZED", {
      message: "No token provided",
    });
  }

  try {
    const { payload } = await verifyJWT(token);

    return next({
      context: {
        ...context,
        user: {
          id: payload.sub,
          email: payload.email as string,
        },
      },
    });
  } catch {
    throw new ORPCError("UNAUTHORIZED");
  }
});

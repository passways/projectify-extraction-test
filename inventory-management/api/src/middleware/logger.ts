import { logger } from "../logger";
import { orpc } from "../orpc";

export const logging = orpc.middleware(async (req) => {
  if (req.errors) {
    logger.error({ errors: req.errors });
  }

  return req.next();
});

import { orpc } from "../orpc";
import { requireAuth } from "./auth";
import { logging } from "./logger";

export const base = orpc.use(requireAuth).use(logging);

import { orpc } from "../orpc";
import { requireAuth } from "./auth";

export const base = orpc.use(requireAuth);

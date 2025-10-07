import type {
  RequestHeadersPluginContext,
  ResponseHeadersPluginContext,
} from "@orpc/server/plugins";
import { orpc } from "../orpc";

interface ORCPContext
  extends RequestHeadersPluginContext,
    ResponseHeadersPluginContext {}

export const base = orpc.$context<ORCPContext>();

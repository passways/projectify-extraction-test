import { os } from "@orpc/server";
import type {
  RequestHeadersPluginContext,
  ResponseHeadersPluginContext,
} from "@orpc/server/plugins";

interface ORCPContext
  extends RequestHeadersPluginContext,
    ResponseHeadersPluginContext {}

export const base = os.$context<ORCPContext>();

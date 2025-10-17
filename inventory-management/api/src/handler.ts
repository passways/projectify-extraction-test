import { OpenAPIHandler } from "@orpc/openapi/node";
import { OpenAPIReferencePlugin } from "@orpc/openapi/plugins";
import { onError } from "@orpc/server";
import {
  CORSPlugin,
  RequestHeadersPlugin,
  ResponseHeadersPlugin,
} from "@orpc/server/plugins";
import { ZodSmartCoercionPlugin, ZodToJsonSchemaConverter } from "@orpc/zod";
import { errorInterceptor } from "./procedures/interceptors/error";
import { router } from "./router";

export const handler = new OpenAPIHandler(router, {
  plugins: [
    new CORSPlugin({
      credentials: true,
    }),
    new ZodSmartCoercionPlugin(),
    new RequestHeadersPlugin(),
    new ResponseHeadersPlugin(),
    new OpenAPIReferencePlugin({
      docsProvider: "scalar",
      docsPath: "/docs",
      schemaConverters: [new ZodToJsonSchemaConverter()],
      specGenerateOptions: {
        info: {
          title: "Inventory Management API",
          version: "1.0.0",
        },
      },
    }),
  ],
  interceptors: [onError((error) => errorInterceptor(error))],
});

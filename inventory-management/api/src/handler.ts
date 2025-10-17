import { OpenAPIHandler } from "@orpc/openapi/fetch";
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
import { auth } from "./utils/auth";

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
      specGenerateOptions: async () => {
        const openAPISchema = await auth.api.generateOpenAPISchema();

        openAPISchema.paths = Object.fromEntries(
          Object.entries(openAPISchema.paths).map(([key, value]) => {
            return [`/auth${key}`, value];
          }),
        );

        console.log(openAPISchema.paths);

        return {
          // biome-ignore lint/suspicious/noExplicitAny: Provided by documentation
          ...(openAPISchema as any),
          info: {
            title: "Inventory Management API",
            version: "1.0.0",
          },
          servers: [
            {
              url: "http://localhost:3080",
            },
          ],
        };
      },
    }),
  ],
  interceptors: [onError((error) => errorInterceptor(error))],
});

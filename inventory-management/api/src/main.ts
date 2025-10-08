import { createServer } from "node:http";
import { OpenAPIHandler } from "@orpc/openapi/node";
import { OpenAPIReferencePlugin } from "@orpc/openapi/plugins";
import { onError } from "@orpc/server";
import { CORSPlugin } from "@orpc/server/plugins";
import { ZodSmartCoercionPlugin } from "@orpc/zod";
import { ZodToJsonSchemaConverter } from "@orpc/zod/zod4";
import { logger } from "./logger";
import { errorInterceptor } from "./procedures/interceptors/error";
import { router } from "./router";

const handler = new OpenAPIHandler(router, {
  plugins: [
    new CORSPlugin(),
    new ZodSmartCoercionPlugin(),
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

const server = createServer(async (req, res) => {
  const result = await handler.handle(req, res, {
    context: { headers: req.headers },
  });

  if (!result.matched) {
    res.statusCode = 404;
    res.end("No procedure matched");
  }
});

server.on("error", (err) => {
  logger.error(err);
});

server.listen(3080, "127.0.0.1", () =>
  logger.info("Server listening on http://127.0.0.1:3080"),
);

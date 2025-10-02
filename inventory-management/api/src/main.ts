import { createServer } from "node:http";
import { onError } from "@orpc/server";
import { RPCHandler } from "@orpc/server/node";
import { CORSPlugin } from "@orpc/server/plugins";
import { logger } from "./logger";
import { router } from "./router";

const handler = new RPCHandler(router, {
  plugins: [new CORSPlugin()],
  interceptors: [onError((err) => logger.error(err))],
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

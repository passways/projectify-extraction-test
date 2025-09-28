import { RPCHandler } from "@orpc/server/node";
import { CORSPlugin } from "@orpc/server/plugins";
import { router } from "./router";
import { createServer } from "node:http";
import { logger } from "./logger";

const handler = new RPCHandler(router, {
  plugins: [new CORSPlugin()],
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

server.listen(3080, "127.0.0.1", () =>
  logger.info("Server listening on http://127.0.0.1:3080"),
);

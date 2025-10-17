import { createServer } from "node:http";
import { handler } from "./handler";
import { logger } from "./logger";

const server = createServer(async (req, res) => {
  const { matched } = await handler.handle(req, res, {
    context: { headers: req.headers },
  });

  if (!matched) {
    res.statusCode = 404;
    res.end("No procedure matched");
  }
});

server.listen(3080, "127.0.0.1", () =>
  logger.info("Server listening on http://127.0.0.1:3080"),
);

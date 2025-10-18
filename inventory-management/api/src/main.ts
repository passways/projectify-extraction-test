import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { env } from "./env";
import { handler } from "./handler";
import { auth } from "./utils/auth";

const app = new Hono();

app.use(logger());
app.use(
  "*",
  cors({
    origin: env.CORS_ALLOWED_ORIGIN,
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  }),
);

app.use("/*", async (c, next) => {
  const { matched, response } = await handler.handle(c.req.raw);

  if (matched) {
    return c.newResponse(response.body, response);
  }

  await next();
});

app.on(["POST", "GET"], "/auth/*", (c) => {
  return auth.handler(c.req.raw);
});

serve({
  fetch: app.fetch,
  port: 3000,
});

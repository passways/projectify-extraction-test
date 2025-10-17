import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { handler } from "./handler";
import { auth } from "./utils/auth";

const app = new Hono();

// Apply CORS to all routes
app.use(
  "*",
  cors({
    origin: "http://localhost:3000",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  }),
);

app.use(
  "/auth/*",
  cors({
    origin: "http://localhost:3000",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  }),
);
app.on(["POST", "GET"], "/auth/*", (c) => {
  console.log("Auth request:", c.req.raw.url);
  return auth.handler(c.req.raw);
});

app.use("/*", async (c, next) => {
  const headers = c.req.header();

  const { matched, response } = await handler.handle(c.req.raw, {
    context: { headers: headers },
  });

  if (matched) {
    return c.newResponse(response.body, response);
  }

  await next();
});

serve({
  fetch: app.fetch,
  port: 3080,
});

app.onError((err, c) => {
  console.error(err);
  return c.text("Internal Server Error", 500);
});

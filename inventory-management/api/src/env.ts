import "dotenv/config";

const dbUrl = process.env.INMA_DATABASE_URL;
const authSecret = process.env.INMA_AUTH_SECRET;
const corsOrigin = process.env.INMA_CORS_ALLOWED_ORIGIN;

if (!dbUrl) {
  console.error("DATABASE_URL is not set");
  process.exit(1);
}

if (!authSecret) {
  console.error("BETTER_AUTH_SECRET is not set");
  process.exit(1);
}

if (!corsOrigin) {
  console.error("CORS_ALLOWED_ORIGIN is not set");
  process.exit(1);
}

export const env = {
  NODE_ENV: process.env.NODE_ENV || "production",
  DATABASE_URL: dbUrl,
  BETTER_AUTH_SECRET: authSecret,
  CORS_ALLOWED_ORIGIN: corsOrigin,
};

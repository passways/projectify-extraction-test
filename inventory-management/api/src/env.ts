import "dotenv/config";

const dbUrl = process.env.DATABASE_URL;
const authSecret = process.env.BETTER_AUTH_SECRET;
const authUrl = process.env.BETTER_AUTH_URL;

if (!dbUrl) {
  console.error("DATABASE_URL is not set");
  process.exit(1);
}

if (!authSecret) {
  console.error("BETTER_AUTH_SECRET is not set");
  process.exit(1);
}

if (!authUrl) {
  console.error("BETTER_AUTH_URL is not set");
  process.exit(1);
}

export const env = {
  NODE_ENV: process.env.NODE_ENV || "production",
  DATABASE_URL: dbUrl,
  BETTER_AUTH_SECRET: authSecret,
  BETTER_AUTH_URL: authUrl,
};

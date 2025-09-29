import "dotenv/config";
import { logger } from "./logger";

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  logger.error("DATABASE_URL is not set");
  process.exit(1);
}

export const env = {
  NODE_ENV: process.env.NODE_ENV || "production",
  DATABASE_URL: dbUrl,
};

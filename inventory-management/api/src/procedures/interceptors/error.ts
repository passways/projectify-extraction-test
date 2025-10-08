import { ORPCError, ValidationError } from "@orpc/server";
import { logger } from "better-auth";
import z from "zod";

export const errorInterceptor = (error: unknown) => {
  logger.error("An error occurred in a procedure", { error });

  if (error instanceof ORPCError) {
    if (
      error.code === "BAD_REQUEST" &&
      error.cause instanceof ValidationError
    ) {
      const zodError = new z.ZodError(error.cause.issues as z.core.$ZodIssue[]);

      throw new ORPCError("INPUT_VALIDATION_FAILED", {
        status: 422,
        message: z.prettifyError(zodError),
        data: z.flattenError(zodError),
        cause: error.cause,
      });
    }

    if (
      error.code === "INTERNAL_SERVER_ERROR" &&
      error.cause instanceof ValidationError
    ) {
      throw new ORPCError("OUTPUT_VALIDATION_FAILED", {
        cause: error.cause,
      });
    }
  }
};

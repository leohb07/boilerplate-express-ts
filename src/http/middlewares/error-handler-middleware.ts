import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { env } from "../../env";

export function errorHandler(
  error: any,
  _: Request,
  res: Response,
  __: NextFunction,
) {
  if (error instanceof ZodError) {
    return res.status(400).send({
      message: "Validation error.",
      issues: error.format(),
    });
  }

  if (env.NODE_ENV !== "prod") {
    console.error(error);
  } else {
    // TODO: Here we should log to an external tool like DataDog/NewRelic/Sentry
  }

  return res.status(500).send({ message: "Internal server error." });
}

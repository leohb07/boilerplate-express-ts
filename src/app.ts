import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { errorHandler } from "./http/middlewares/error-handler-middleware";

export const app: Application = express();

app.use(cors());
app.use(express.json());

app.use(errorHandler);

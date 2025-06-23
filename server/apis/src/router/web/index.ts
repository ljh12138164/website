import { Hono } from "hono";
import { userRouter } from "./user";
import { workflowRouter } from "./workflow";
import "dotenv";

export const webRouter = new Hono()
  .route("/user", userRouter)
  .route("/workflow", workflowRouter);

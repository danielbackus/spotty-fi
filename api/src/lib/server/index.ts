import express from "express";
import logger from "@lib/logger";
import { Connection, connect } from "@lib/db";
import router from "./routes";

export const init = async () => {
  logger.log("initializing api server");
  let connection: Connection;
  try {
    logger.log("connecting to database");
    connection = await connect();
    logger.log("connected to database");
  } catch (err) {
    logger.error("error connecting to database", { err });
  }

  const app = express();
  app.use(router);
  app.listen(process.env.PORT, () =>
    logger.log(`express server listening on ${process.env.PORT}`)
  );
  return app;
};

import express from "express";

import logger from "../logger"; // this abstraction will allow us to easily switch logging libraries
import { Connection, connect, getConnection } from "../db";

export const init = async () => {
  logger.log("initializing api server");
  let connection: Connection;
  try {
    logger.log("connecting to database");
    connection = await connect();
  } catch (err) {
    logger.error("error connection to database", { err });
  }
  const app = express();

  // health check endpoints
  app.get("/status", (req, res) => res.end());
  app.get("/status/db", async (req, res) => {
    try {
      await connection.query("SELECT 1");
      res.end();
    } catch (err) {
      res.status(500);
    }
  });
  app.listen(process.env.PORT, () =>
    logger.log(`express server listening on ${process.env.PORT}`)
  );
  return app;
};

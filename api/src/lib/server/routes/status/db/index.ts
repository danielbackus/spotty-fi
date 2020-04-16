import { getConnection } from "@lib/db";
import { Router, Request, Response } from "express";

export const statusHandler = async (req: Request, res: Response) => {
  try {
    const connection = await getConnection();
    await connection.query("SELECT 1");
  } catch (err) {
    res.status(500);
  }
  res.end();
};

const router = Router();
router.route("/").get(statusHandler);

export default router;

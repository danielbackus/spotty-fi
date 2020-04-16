import { Router, Request, Response } from "express";
import dbStatusRouter from "./db";

const router = Router();

export const statusHandler = (req: Request, res: Response) => res.end();

router.route("/").get(statusHandler);
router.use("/db", dbStatusRouter);

export default router;

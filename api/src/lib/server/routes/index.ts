import { Router } from "express";
import statusRouter from "./status";

const router = Router();
router.use("/status", statusRouter);

export default router;

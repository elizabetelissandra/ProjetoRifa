import { Router } from "express";
import rifaRoutes from "./rifaRoutes";

const router = Router()

router.use("/rifa", rifaRoutes)

export default router
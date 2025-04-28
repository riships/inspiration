import { Router } from "express";
import { createInspirationController } from "../controller/Inspirations.controller.js";
const router = Router();

router.post("/inspirations", createInspirationController);


export default router;
import { Router } from "express";
import { createInspirationController, getAllInspirationsController, getInspirationsController } from "../controller/Inspirations.controller.js";
const router = Router();

router.post("/inspirations", createInspirationController);
router.get("/inspirations", getAllInspirationsController);
router.get("/inspirations/:slug", getInspirationsController);


export default router;
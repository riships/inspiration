import { Router } from "express";
import { LinkExtractor } from "../controller/LinkExtractor.contrller.js";
const router = Router();

router.post("/extract-links", LinkExtractor);

export default router;

